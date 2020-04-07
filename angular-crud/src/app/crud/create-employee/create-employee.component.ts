import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/_services/crud.service';
import { Employee } from 'src/app/models/EmployeeModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  formModel = this.buildFormGroup();
  formControls = this.formModel.controls;

  employee: Employee;
  constructor(private fb: FormBuilder, private crudService: CrudService,  private router: Router) { }

  ngOnInit() {
  }

  private buildFormGroup() {
    return this.fb.group({
      employeeName: ['', [Validators.required]],
      role: ['', ],
      salary: ['', [Validators.required]],
      company: ['', [Validators.required]]
    });
  }

  onSaveClick() {

    if (this.formModel.valid) {
      console.log('In Valid condition');
      this.employee = Object.assign({}, this.formModel.value);
      console.log(this.employee);
      this.crudService.createEmployees(this.employee).subscribe(() => {
        this.router.navigate(['/home']);
      });
    }
    console.log('InValid condition');
  }

  onCancelClick() {
    this.router.navigate(['/home']);
  }

}
