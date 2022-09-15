import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:any;
  employee: Employee =new Employee();
  constructor(private router:Router, private employeeService:EmployeeService, private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe( data => {
      this.employee=data},
      error => console.log(error)
    );
  }

  goTOEmployeeList(){
    this.router.navigate(['update-employee/:id'])
  }

  onSubmit(){
    this.employeeService.UpdateEmployee(this.id, this.employee).subscribe( data =>{
      this.GoTOEmployeeList()
    }, error => console.log(error)
    
    );
  }

  GoTOEmployeeList(){
    this.router.navigate(['/employees'])
  }
  
}
