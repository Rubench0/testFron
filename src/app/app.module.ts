import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MenuComponent } from './admin/menu/menu.component';
import { NavComponent } from './layout/nav/nav.component';
import { AdminComponent, DialogFormAddFilm } from './admin/admin.component';
import { ListdrawerComponent } from './layout/listdrawer/listdrawer.component';
import { TableComponent, DialogFormEditFilm, DialogFormDeleteFilm } from './films/table/table.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnackComponent } from './layout/snack/snack.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavComponent,
    AdminComponent,
    ListdrawerComponent,
    TableComponent,
    DialogFormAddFilm,
    DialogFormEditFilm,
    DialogFormDeleteFilm,
    SnackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  entryComponents: [
    DialogFormAddFilm,
    DialogFormEditFilm,
    DialogFormDeleteFilm,
    SnackComponent
  ],
  providers: [
    MatDatepickerModule,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
