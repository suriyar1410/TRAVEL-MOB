import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travelcalen',
  templateUrl: './travelcalen.component.html',
  styleUrls: ['./travelcalen.component.scss'],
})
export class TravelcalenComponent   {

  adultCount: number = 0;
  childCount: number = 0;
  totalPrice: number = 0;

  readonly adultPrice: number = 100; 
  readonly childPrice: number = 50;  

  constructor(private router:Router) {
  }

  incrementAdultCount() {
    this.adultCount++;
    this.calculateTotalPrice();
  }

  decrementAdultCount() {
    if (this.adultCount > 0) {
      this.adultCount--;
      this.calculateTotalPrice();
    }
  }

  incrementChildCount() {
    this.childCount++;
    this.calculateTotalPrice();
  }

  decrementChildCount() {
    if (this.childCount > 0) {
      this.childCount--;
      this.calculateTotalPrice();
    }
  }

  calculateTotalPrice() {
    this.totalPrice = (this.adultCount * this.adultPrice) + (this.childCount * this.childPrice);
  }


  onDateChange(event: any) {
    console.log('Selected Date:', event.detail.value);
  }


closebtn(){
  this.router.navigate(['/producthome']);
}

bookbtn(){
  this.router.navigate(['/payment'])
}
}