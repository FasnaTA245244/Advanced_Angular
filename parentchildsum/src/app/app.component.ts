import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchildsum';
  sum=0;
 
  value=0;
  sendData(value: number){
    this.sum=value;
  }
  
  sendData2(value:number){
    this.sum=this.sum+value;
  }
}
