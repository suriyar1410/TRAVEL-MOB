import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service'; 
interface CartItem {
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss'],
})
export class CartpageComponent  implements OnInit {
  
  ngOnInit() {
    this.loadCart();
  }
  // Load cart data using CartService
  loadCart() {
    this.cart = this.cartService.getCart();
    this.cartItems = this.cartService.getCartItems();
  }

  cartItems: any[] = [];

  cart: any[] = [];

  totalAmount: number = this.cartItems.reduce((sum, item) => sum + item.price, 0);

  constructor(private router:Router,private cartService: CartService) {}

  // Remove a package from the cart
  removeFromCart(packagedata: any) {
    this.cartService.removeFromCart(packagedata);  // Use CartService to remove package
    this.loadCart();  // Reload cart data after removing
  }

  closebtn(){
    this.router.navigate(['/producthome']);
  }
  checkout() {
    // Your checkout logic
    console.log('Proceed to checkout with:', this.cart);
  }

}
