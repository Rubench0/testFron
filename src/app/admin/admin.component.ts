import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Film } from 'src/app/interfaces/film';
import { FirestoreService } from '../services/firestore.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from '../layout/snack/snack.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	public index: number;
	  
	constructor(
		public dialog: MatDialog,
		private _firestoreService: FirestoreService,
	) {
		this._firestoreService.getFilms().subscribe(
			response => {
				this.index = response.length + 1;
			}
		)
	 }

  	ngOnInit(): void {
	  }
	
	openDialog(): void {
		const dialogRef = this.dialog.open(DialogFormAddFilm, {
			width: '50%',
			data: {index: this.index}
		});
		
		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
		});
	}
}

@Component({
	selector: 'dialog-form-add-film',
	templateUrl: '../layout/dialog/dialog-form.html',
})
export class DialogFormAddFilm implements OnInit {
	public formFilm: FormGroup;
	public film: Film;

	constructor(
		public dialogRef: MatDialogRef<DialogFormAddFilm>,
		private _firestoreService: FirestoreService,
		private formBuilder: FormBuilder,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private _snackBar: MatSnackBar
	) {
		this.film = new Film('','','','','');
	}
	
	ngOnInit() {
		this.formFilm = this.formBuilder.group({
			inputName: [
			  '', [
				Validators.required,
				Validators.pattern('^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$')
			]
			],
			inputDate: [
			  '', [Validators.required]
			],
			inputStatus: [
			  '', [Validators.required]
			]
		});
	}


	closeDialog(): void {
		this.dialogRef.close();
	}

	submit() {
		this.film.name = this.formFilm.value.inputName;
		this.film.date = this.formFilm.value.inputDate;
		this.film.status = this.formFilm.value.inputStatus;
		this._firestoreService.registryFilm(this.film).then((response) => {
			this.dialogRef.close();
			this._snackBar.openFromComponent(SnackComponent, {
				duration: 3 * 1000,
				data: {msg: 'Registro creado'}
			});
		});
	}
}