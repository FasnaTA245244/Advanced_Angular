import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PCTable';
  people = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 32 },
    { name: 'Bob', age: 42 }
  ];

  
}
