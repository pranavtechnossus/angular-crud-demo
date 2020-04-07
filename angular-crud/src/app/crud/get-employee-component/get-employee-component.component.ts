import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/_services/crud.service';
import { Employee } from 'src/app/models/EmployeeModel';
import { error } from 'util';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-get-employee-component',
  templateUrl: './get-employee-component.component.html',
  styleUrls: ['./get-employee-component.component.scss']
})
export class GetEmployeeComponentComponent implements OnInit {

  employee: Employee[];
  constructor(private crudService: CrudService) {
  }
  displayedColumns: string[] = ['id', 'employeeName', 'role', 'salary', 'company'];
  dataSource = new MatTableDataSource<Employee>(this.employee);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.loadEmployees();
    console.log(this.dataSource);
    console.log(this.employee);
  }

  loadEmployees() {
    this.crudService.getEmployees().subscribe((res: Employee[]) => {
      this.employee =  res;
      console.log(this.employee);
    },
    error => {
      console.log(error);
    }
    );
  }

}
