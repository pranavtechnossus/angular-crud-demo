import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/EmployeeModel';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + 'CrudAPI');
  }

  createEmployees(employee: Employee) {
    return this.http.post(this.baseUrl + 'CrudAPI', employee);
  }

  deleteEmployee(id) {
    return this.http.delete(this.baseUrl + 'CrudAPI/' + id);
  }
}

