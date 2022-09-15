import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  updateEmployee(id: any, employee: Employee) {
    throw new Error('Method not implemented.');
  }


  private baseURl="http://localhost:8081/api/v1/employees";
  constructor(private httpClient: HttpClient) { }

  getEmployeeslist():Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURl}`)

  };

  createEmployee(employee: Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseURl}`, employee);
  };

  
  getEmployeeById(id:any):Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURl}/${id}`);
  };

  UpdateEmployee(id:any, employee:Employee):Observable<Object>{

  return this.httpClient.put(`${this.baseURl}/${id}`, employee);
};

}
