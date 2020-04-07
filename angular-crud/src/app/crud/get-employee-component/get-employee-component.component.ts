import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/_services/crud.service';
import { Employee } from 'src/app/models/EmployeeModel';
import { error } from 'util';

@Component({
  selector: 'app-get-employee-component',
  templateUrl: './get-employee-component.component.html',
  styleUrls: ['./get-employee-component.component.scss']
})
export class GetEmployeeComponentComponent implements OnInit {

  employee: Employee[];
  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.crudService.getEmployees().subscribe((res: Employee[]) => {
      this.employee = res;
      console.log(this.employee);
    },
    error => {
      console.log(error);
    }
    );
  }

}
