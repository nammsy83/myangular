import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-test',
  /** Interpolation, Property Binding, Class Binding, Event Binding */
  template: `
  <body>
  <h1>Interpolation</h1>
  <div>Welcome {{name}}</div>
  <h2>Concatenation - {{2+2}}</h2>
  <h2>To uppercase - {{"Welcome " + name.toUpperCase()}}</h2>
  <h2>Check length - {{"This is the length " + name.length }}</h2>
  <h2>Greet user - {{greetUser()}}</h2>

  <h1>Property Binding</h1>
  <p>Console value</p>
  <input type="text" [value]=value [id]=myId>

  <h1>Class Binding</h1>
  <h3 class="text-success">This is a success message</h3>
  <h3 [class]=successMsg>This is called from public function</h3>
  <h3 [class.text-danger] = "hasError">This is conditional</h3>
  <h3 [ngClass]="multipleClasses">This is using conditional classes from object</h3>

  <h1>Style Binding</h1>
  <h3 [style.color]="'orange'">This is style binding</h3>
  <h3 [ngStyle]="titleStyles">this is style binding is coming from Object</h3>

  <h1>Event Binding</h1>
  <button (click) = onClick()>Greet</button>  {{greeting}}<br><br>
  <button (click) = "greetinginline='This is inline greeting'">Greet again</button>

  {{greetinginline}}


  <h1>Template reference variable</h1>
  <p>When there is user interaction we might want some data to flow from the view to the class to perform an operation. For rg. we may require the value from the input field to perform an operation.</p>
  <input #myInput type="text" class="input">
  <button (click)="logMessage(myInput)">Log</button>

  <h1>Two  way binding</h1>
  <p>Dont forget to add FormsModule in app.module.ts</p>
  <input  type="text" [(ngModel)]="name">
  {{name}}

  <h1>Structural Directives</h1>
  <p>Common structural directives</p>
  <ul>
    <li>ngIf</li>
    <li>ngSwitch</li>
    <li>ngFor</li>
  </ul>
   <h2 *ngIf="displayName">CodeEvolution</h2>
  <p>This is how If and else works inline</p>
  <h2 *ngIf="printName; else elseBlock">
    Code evolution
  </h2>

  <ng-template #elseBlock>
      <h2>
        Name is hidden
      </h2>
  </ng-template>

  <p>This is how If and else works in a separate tag</p>

  <div *ngIf="checkName; then thenBlock; else elseBlock2"></div>
  <ng-template #thenBlock>
      <h2>If block is displayed</h2>
  </ng-template>
  <ng-template #elseBlock2>
      <h2>Else block is displayed</h2>
  </ng-template>

  <h1>ngSwitch Directive</h1>
  <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked red color</div>
      <div *ngSwitchCase="'blue'">You picked blue color</div>
      <div *ngSwitchCase="'green'">You picked green color</div>
      <div *ngSwitchDefault>Pick again</div>

  </div>
  <h1>ngForDirective</h1>
  <p></p>
  <div *ngFor="let color of colors; odd as i">
        <h2>{{color}} {{i}}</h2>
  </div>

  <h1>Component Interaction</h1>
  <p>To display  message from App component to Test Component:
  Refer test.component.html
  </p>
  <h2>{{"Hello " + myname}}</h2>
  <p>To send data from Childcomponent to parent component - </p>
  <button (click)="fireEvent()">Send message</button>

  <h1>Pipes</h1>
  <p>Pipes allow us to transform data before displaying them in the view</p>
  <h2>{{name | lowercase}}</h2>
  <h2>{{name | uppercase}}</h2>
  <h2>{{message | titlecase}}</h2>
  <h2>{{message | slice:3:5}}</h2>
  <h2>{{person | json}}</h2>
  <h1>Services</h1>
  <p> A class with a specific purpose</p>
  <ul>
      <li>Share data</li>
      <li>Implement Application Logic</li>
      <li>External Interaction</li>
      <li>Naming convention eg. Employee.service.ts</li>
  </ul>
  <p>How to use a service</p>
  <ul>
    <li>Define the EmployeeService class</li>
    <li>Rejister with injector</li>
    <li>Declare a dependency in EmployeeList and EmployeeDetail</li>
  </ul>
  
  </body>
  `,
  styles: [`
        body{font-family: 'Arial', sans-serif; text-align:left;}
        h1{color: Red;}
        .text-success{color:green;}
        .text-danger{color: red;}
        .text-special{font-style: italic;}
        p{font-size: 20px; max-width: 400px;}
  `]
})
export class TestComponent implements OnInit {
  public name = "Subhedar";
  public value = "Namrata";
  public myId = "test";
  public successMsg = 'text-success';
  public hasError = false;
  public isSpecial = true;
  public multipleClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial,
  }
  public titleStyles ={
    "color": 'orange',
    "fontStyle": 'italic',
  }
  public greeting = "";
  public displayName = true;
  public printName = false;
  public checkName = false;
  public color = "orange";
  public colors = ['red','blue','orange','yellow'];
  public message = 'welcome to codevolution';
  public person = {
    "firstName": 'Namrata',
    "LastName": 'Subhedar'
  }
  @Input('parentData') public myname;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello, " + this.name;
  }
  onClick(){
    console.log('Welcome to codeEvolution');
    this.greeting = "Welcome to code evolition";
  }
  fireEvent(){
    this.childEvent.emit('Hey CodeEvolution');
    console.log('Hey codevolution');
  }
  logMessage(value){
    console.log(value)
  }

}
