import { Component } from '@angular/core';
import { pType } from 'src/app/model/interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  constructor(private cartservice:CartService){}
  carts:pType[]=JSON.parse(localStorage.getItem("cart")!);
  count=this.cartservice.returnCount();
  userId:number=parseInt(sessionStorage.getItem("userID")!);
  cartUserId:number=this.getUserIdFromCart();
  // cart:pType=this.carts.find((c)=>c.userId===this.userId)!;

  
  getUserIdFromCart():number{
    for(let c of this.carts){
      if(c.userId===this.userId){
        return c.userId;
      }
    }
    return -1;
  }

  // checkout(){
  //   this.cartservice.checkout();
  // }

  cart(){
    return this.cartservice.getCart();
  }
}