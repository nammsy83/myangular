import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './../employee.service';
@Component({
  selector: 'employee-list',
  template: `<h2>Employee list</h2>
    <ul *ngFor="let employee of employees">
        <li>{{employee.id}}. {{employee.name}}- {{employee.age}}</li>
    </ul>
  `,
  styles: [`
    h2{text-align:left;}
    ul{max-width: 300px; text-align:left;}
  `]
})
export class EmployeeListComponent implements OnInit {
  public employees = [];
  
  constructor(private _employeeService: EmployeeService) { }
  
  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this._employeeService.getnewEmployees().subscribe(data => this.employees = data);

  }

}
