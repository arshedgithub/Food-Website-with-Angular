import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  constructor() { }

  addToCart(food: Food):void{
    let cartItem = this.cart.items.find(item => item.food.id == food.id);
    if (cartItem) {
      this.changeQuantity(cartItem.food.id, cartItem.quantity + 1);
      return;
    } 
    this.cart.items.push(new CartItem(food))
  }

  removeFromCart(foodId: number){
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId );
  }

  changeQuantity(foodId:number, quantity:number){
    let CartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!CartItem) return;
    CartItem.quantity = quantity;
  }

  getCart():Cart {
    return this.cart;
  }
}
