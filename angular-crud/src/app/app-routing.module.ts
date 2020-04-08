import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetEmployeeComponentComponent } from './crud/get-employee-component/get-employee-component.component';
import { CreateEmployeeComponent } from './crud/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './crud/update-employee/update-employee.component';


const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'home', component: GetEmployeeComponentComponent },
  { path: 'create-employee', component: CreateEmployeeComponent},
  { path: 'update/:id', component: UpdateEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents  = [GetEmployeeComponentComponent, CreateEmployeeComponent]
