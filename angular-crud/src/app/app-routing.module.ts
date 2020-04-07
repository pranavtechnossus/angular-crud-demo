import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetEmployeeComponentComponent } from './crud/get-employee-component/get-employee-component.component';
import { CreateEmployeeComponent } from './crud/create-employee/create-employee.component';


const routes: Routes = [
  { path: 'home', component: GetEmployeeComponentComponent },
  { path: 'create-employee', component: CreateEmployeeComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents  = [GetEmployeeComponentComponent, CreateEmployeeComponent]
