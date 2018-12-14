import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './../employee.service';
@Component({
  selector: 'employee-detail',
  template: `
  <h2>Employee Detail</h2>
    <ul *ngFor="let employee of employees">
        <li>{{employee.name}}</li>
    </ul>
  `,
  styles: [`
  h2{text-align:left;}
    ul{max-width: 300px; text-align:left;}
  `]
})
export class EmployeeDetailComponent implements OnInit {
  public employees = [];
  public getnewEmployees = [];
  constructor(private _employeeService: EmployeeService) { }
 
  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this._employeeService.getnewEmployees().subscribe(data => this.employees = data);

  }

}
