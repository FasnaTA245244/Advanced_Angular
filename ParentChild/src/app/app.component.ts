import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ParentChild';
   itemList: string[] = ['Item 1'];
  //itemList: string[] = [""];
  newItem="";

  addItem() {
  const newItem = `Item ${this.itemList.length + 1}`;
   this.itemList.push(newItem);
  }
  // itemList: string[] = [];

  // addItems(count: number) {
  //   for (let i = 1; i <= count; i++) {
  //     this.itemList.push('Item ' + i);
  //   }
  }
 
 

