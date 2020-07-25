import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Film } from 'src/app/interfaces/film';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

const ELEMENT_DATA: Film[] = [{id: 1, name: 'Hydrogen', date: '', status: 'H', option : 1}];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'date', 'status', 'option'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  openDialogEdit(): void {
		const dialogRef = this.dialog.open(DialogFormEditFilm, {
			width: '50%',
		});
		
		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
		});
  }
  
  openDialogDelete(): void {
		const dialogRef = this.dialog.open(DialogFormDeleteFilm, {
			width: '250px',
		});
		
		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
		});
	}

}

@Component({
	selector: 'dialog-form-edit-film',
	templateUrl: '../../layout/dialog/dialog-edit.html',
})
export class DialogFormEditFilm {
  constructor(
		public dialogRef: MatDialogRef<DialogFormEditFilm>,
		@Inject(MAT_DIALOG_DATA) public data: Film
	) {}
	
	onNoClick(): void {
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
		@Inject(MAT_DIALOG_DATA) public data: Film
	) {}
	
	onNoClick(): void {
		this.dialogRef.close();
	}
}