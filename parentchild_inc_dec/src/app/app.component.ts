import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchild_inc_dec';
  counter=0
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
}
