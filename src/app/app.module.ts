import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { MenuComponent } from './admin/menu/menu.component';
import { NavComponent } from './layout/nav/nav.component';
import { AdminComponent, DialogFormAddFilm } from './admin/admin.component';
import { ListdrawerComponent } from './layout/listdrawer/listdrawer.component';
import { TableComponent, DialogFormEditFilm, DialogFormDeleteFilm } from './films/table/table.component';

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
    DialogFormDeleteFilm
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
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule
  ],
  entryComponents: [
    DialogFormAddFilm,
    DialogFormEditFilm,
    DialogFormDeleteFilm
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
