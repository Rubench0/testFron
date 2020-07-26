import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Film, FilmInterface } from 'src/app/interfaces/film';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from 'src/app/layout/snack/snack.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'date', 'status', 'option'];
  public dataSource;
  public data: any[] = [];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
	public dialog: MatDialog,
	private _firestoreService: FirestoreService,
  ) { 
	this._firestoreService.getFilms().subscribe(
		response => {
			response.forEach(item => {
				let data = item.payload.doc.data() as Film;
				this.data.push({ ...data, id : item.payload.doc.id, option : item.payload.doc.id});
			})
			this.dataSource = new MatTableDataSource<FilmInterface>(this.data);
		}
	)
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  openDialogEdit(element): void {
		const dialogRef = this.dialog.open(DialogFormEditFilm, {
			width: '50%',
			data: element
		});
		
		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
		});
  }
  
  openDialogDelete(element): void {
		const dialogRef = this.dialog.open(DialogFormDeleteFilm, {
			width: '250px',
			data: element
		});
		
		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
		});
	}

}

@Component({
	selector: 'dialog-form-edit-film',
	templateUrl: '../../layout/dialog/dialog-form.html',
})
export class DialogFormEditFilm implements OnInit {
	public formFilm: FormGroup;
	public film: Film;

  constructor(
		public dialogRef: MatDialogRef<DialogFormEditFilm>,
		@Inject(MAT_DIALOG_DATA) public data: Film,
		private formBuilder: FormBuilder,
		private _firestoreService: FirestoreService,
		private _snackBar: MatSnackBar
	) {
		this.film = new Film('','','','','');

	}
	
	ngOnInit() {
		this.formFilm = this.formBuilder.group({
			inputName: [
			  this.data.name, [
				Validators.required,
				Validators.pattern('^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$')
			]
			],
			inputDate: [
				'', [Validators.required]
			],
			inputStatus: [
				this.data.status, [Validators.required]
			]
		});
	}

	submit() {
		this.film.name = this.formFilm.value.inputName;
		this.film.date = this.formFilm.value.inputDate;
		this.film.status = this.formFilm.value.inputStatus;
		this._firestoreService.updateFilms(this.data.id, this.film).then((response) => {
			this.dialogRef.close();
			this._snackBar.openFromComponent(SnackComponent, {
				duration: 3 * 1000,
				data: {msg: 'Registro editado'}
			});
		});
	}

	closeDialog(): void {
		this.dialogRef.close();
	}
}

@Component({
	selector: 'dialog-form-delete-film',
	templateUrl: '../../layout/dialog/dialog-delete.html',
})
export class DialogFormDeleteFilm {
  constructor(
		public dialogRef: MatDialogRef<DialogFormDeleteFilm>,
		@Inject(MAT_DIALOG_DATA) public data: Film,
		private _firestoreService: FirestoreService,
		private _snackBar: MatSnackBar
	) {}
	
	submit() {
		this._firestoreService.deleteFilms(this.data.id).then((response) => {
			this.dialogRef.close();
			this._snackBar.openFromComponent(SnackComponent, {
				duration: 3 * 1000,
				data: {msg: 'Registro eliminado'}
			});
		});
	}

	closeDialog(): void {
		this.dialogRef.close();
	}
}