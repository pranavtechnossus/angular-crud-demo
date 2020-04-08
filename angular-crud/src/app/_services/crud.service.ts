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
    return this.http.get<Employee[]>(this.baseUrl);
  }

  getEmployeeById(id): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + '/' + id);
  }

  createEmployees(employee: Employee) {
    return this.http.post(this.baseUrl, employee);
  }

  updateEmployees(id: number, employee: Employee) {
    return this.http.put(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}

