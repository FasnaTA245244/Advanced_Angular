import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() public sendData=new EventEmitter<number>();
  send(){
    this.sendData.emit(0);
  }
  @Output() public sendData2=new EventEmitter<number>();
  send2(){
    this.sendData2.emit(10);
  }

}
