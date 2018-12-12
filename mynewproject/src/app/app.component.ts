import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'namrata';
  public name = 'Namrata';
  public message = "";
}

@Component({
  selector: 'employee-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class EmployeeListComponent {
  title="this is employee list";
}

@Component({
  selector: 'employee-detail',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class EmployeeDetailComponent {
  title="this is employee detail";
}
