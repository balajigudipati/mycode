import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Type } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

//import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee =new Employee();
  

  constructor(private employeeService: EmployeeService, private router:Router ) { }

  ngOnInit(): void {
  }

goTOEmployeeList(){
  this.router.navigate(['/employees'])
}

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
        }, error => console.log(error));
      this.goTOEmployeeList();
  }


onSubmit(){
  console.log(this.employee);
  this.saveEmployee();

}

}
