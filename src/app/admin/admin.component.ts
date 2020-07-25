import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Film } from 'src/app/interfaces/film';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	animal: string;
	name: string;
	  
	constructor(
		public dialog: MatDialog
	) { }

  	ngOnInit(): void {
	  }
	
	openDialog(): void {
		const dialogRef = this.dialog.open(DialogFormAddFilm, {
			width: '50%',
			data: {name: this.name, animal: this.animal}
		});
		
		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
			this.animal = result;
		});
	}
}

@Component({
	selector: 'dialog-form-add-film',
	templateUrl: '../layout/dialog/dialog-registry.html',
})
export class DialogFormAddFilm {
	
	constructor(
		public dialogRef: MatDialogRef<DialogFormAddFilm>,
		@Inject(MAT_DIALOG_DATA) public data: Film
	) {}
	
	onNoClick(): void {
		this.dialogRef.close();
	}
}