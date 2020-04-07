import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatSortModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetEmployeeComponentComponent } from './crud/get-employee-component/get-employee-component.component';
import { CrudService } from './_services/crud.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GetEmployeeComponentComponent
  ],
  exports: [
    MatSortModule,
    MatTableModule,
    MatPaginatorModule
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
