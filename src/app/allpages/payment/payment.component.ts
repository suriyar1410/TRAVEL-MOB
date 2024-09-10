import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent  {
  selectedPaymentMethod: string="payment";

  constructor(private router: Router) {}

  proceedWithPayment() {
    if (this.selectedPaymentMethod) {
      console.log(`Proceeding with payment using: ${this.selectedPaymentMethod}`);
     
    } else {
      console.error('Please select a payment method.');
    }
  }


  closebtn(){
    this.router.navigate(['/producthome']);
  }
 

}
