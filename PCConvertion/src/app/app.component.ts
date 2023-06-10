import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PCConvertion';
  convertedAmount!: number;
  converted!: number;

  convertToRupees(amount: number) {
    const exchangeRate = 82.46; // Assuming 1 USD = 82.46 INR
    this.convertedAmount = amount * exchangeRate;
  }
  convertToDollar(amountt: number) {
    const exchangerate = 0.012; // Assuming 1 IND = o.012 USD
    this.converted = amountt * exchangerate;
  }
}
