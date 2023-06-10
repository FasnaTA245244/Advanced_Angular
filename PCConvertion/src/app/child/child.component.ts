import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  dollarAmount!: number;
  @Input()
    USDconvert!:number;
    @Input()
    INDconvert!:number;
  @Output() conversion = new EventEmitter<number>();

  convertToRupees() {
    this.conversion.emit(this.dollarAmount);
  }

  indianAmount!: number;
  @Output() Iconversion = new EventEmitter<number>();

  convertToDollar() {
    this.Iconversion.emit(this.indianAmount);
  }

}
