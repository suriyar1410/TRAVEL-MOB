import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];  
  private cartItems: any[] = [];

  constructor() {
    this.loadCart();  // Load both carts from local storage when the service is initialized
  }

  // Add a vehicle to the cart with the service type
  addToVehicleCart(serviceType: string, vehicle: string) {
    this.cartItems.push({ serviceType, vehicle });
    this.saveCart();  // Save cartItems after modification
  }

  // Get all items from the vehicle cart
  getCartItems() {
    return this.cartItems;
  }

  // Clear the vehicle cart
  clearVehicleCart() {
    this.cartItems = [];
    this.saveCart();  // Save after clearing
  }

  // Load both carts (product cart and vehicle cart) from local storage
  loadCart() {
    const storedProductCart = localStorage.getItem('productCart');
    this.cart = storedProductCart ? JSON.parse(storedProductCart) : [];
    
    const storedVehicleCart = localStorage.getItem('vehicleCart');
    this.cartItems = storedVehicleCart ? JSON.parse(storedVehicleCart) : [];
  }

  // Get all items in the product cart
  getCart() {
    return this.cart;
  }

  // Add a product to the cart
  addToCart(product: any) {
    if (!this.cart.includes(product)) {
      this.cart.push(product);
      this.saveCart();  // Save product cart after modification
    }
  }

  // Remove a product from the cart
  removeFromCart(product: any) {
    const index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1);
      this.saveCart();  // Save product cart after modification
    }
  }

  // Save both carts (product cart and vehicle cart) to local storage
  saveCart() {
    localStorage.setItem('productCart', JSON.stringify(this.cart));
    localStorage.setItem('vehicleCart', JSON.stringify(this.cartItems));
  }

  // Clear the product cart
  clearCart() {
    this.cart = [];
    this.saveCart();  // Save after clearing
  }
}
