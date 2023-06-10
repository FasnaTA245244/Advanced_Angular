import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
   @Input() items!: string[];
  // numberOfItems: number = 0;
  // @Output() addItems = new EventEmitter<number>();

  // addItemsin() {
  //   if (this.numberOfItems > 0) {
  //     this.addItems.emit(this.numberOfItems);
  //     this.numberOfItems = 0;
  //   }
  // }


}
