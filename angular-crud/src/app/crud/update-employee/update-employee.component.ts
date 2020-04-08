import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/_services/crud.service';
import { Employee } from 'src/app/models/EmployeeModel';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  formModel = this.buildFormGroup();
  formControls = this.formModel.controls;

  id: number;
  employee: Employee;
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private crudService: CrudService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.crudService.getEmployeeById(this.id)
      .subscribe(data => {
        this.employee = data;
        console.log(this.employee);
      }, error => console.log(error));
  }

  onSaveClick() {
    if (this.formModel.valid) {
      console.log('In Valid condition');
      this.employee = Object.assign({}, this.formModel.value);
      console.log(this.employee);
      this.crudService.updateEmployees(this.id, this.employee).subscribe(() => {
        this.router.navigate(['/home']);
      });
    }
    console.log('InValid condition');
  }

  onCancelClick() {
    this.router.navigate(['/home']);
  }

  private buildFormGroup() {
    return this.fb.group({
      employeeName: ['', [Validators.required]],
      role: ['', ],
      salary: ['', [Validators.required]],
      company: ['', [Validators.required]]
    });
  }

}
