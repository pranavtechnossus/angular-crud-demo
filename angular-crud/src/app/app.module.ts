import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatSortModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudService } from './_services/crud.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateEmployeeComponent } from './crud/create-employee/create-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './crud/update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UpdateEmployeeComponent
  ],
  exports: [
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }

