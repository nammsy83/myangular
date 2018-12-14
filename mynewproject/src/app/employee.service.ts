import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  getEmployees(){
    return [
      {"id": 1, "name": "Namrata", "age": 30},
      {"id": 2, "name": "Monika", "age": 23},
      {"id": 3, "name": "Sankalpita", "age": 25},      
    ];  
  }

  getnewEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
}
