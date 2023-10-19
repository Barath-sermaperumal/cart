import { Injectable } from '@angular/core';
import { cart, pType, users } from '../model/interface';
import { count } from 'rxjs';
import { StorageService } from './storage.service';
import { parseTemplate } from '@angular/compiler';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private storageService:StorageService) {}

  products: pType[] = this.storageService.getProductFromStorage();
  users: users[] = [];
  carts: pType[] = [];
  total:number=0;

  addToCart(id: number,jhgjfy: number) {
    let cart:cart[]=this.storageService.getcartFromStorage();
    let loggedUser:users=this.storageService.getLoggedInUser();
    let products:pType[]=this.storageService.getProductFromStorage()!;

    let product=products.find((f)=>f.id===id);

    if(product){
      let userCart:cart=cart.find((f)=>f.user.id===loggedUser.id)!;

      if(userCart){
        let productExist:pType=userCart.product.find((f)=>f.id===id)!;
        if(productExist){
          let newCart:pType[]=[];
          for(let product of userCart.product){
            if(product.id===id){
              newCart.push({...product,count:product.count!+1});
            }
            else{
              newCart.push(product);
            }
          }
          userCart.product=newCart;
        }
        else{
          userCart.product.push({...product,count:1});
        }

        let updatedCart:cart[]=cart.filter((c)=>c.user.id!==loggedUser.id);
        updatedCart.push(userCart);
        this.storageService.setcartToStorage(updatedCart);
      }
      else{
        console.log("new user");
        let newCart:cart={
          user:loggedUser,
          product:[{...product,count:1}]
        };
        cart.push(newCart);
        console.log(cart);
        this.storageService.setcartToStorage(cart);
      }
    }
  }

  // checkout(){
  //   let currUser:users=JSON.parse(sessionStorage.getItem("user")!);
  //   let cartUser=this.getCartUser();
  //   console.log(this.getCartUser())
  //   let orders:pType[];
  //   console.log(cartUser,currUser.id);
  //   if(cartUser===currUser.id){
  //     orders=this.getCart();
  //     localStorage.setItem("orders",JSON.stringify(orders)!);
  //   }
  // }

  getCart(){
    let cart: cart[] = this.storageService.getcartFromStorage();
    let loggedUser:users=this.storageService.getLoggedInUser();
    if (cart.length > 0) {
      let userCart: pType[] = cart.find((uc) => uc.user.id === loggedUser.id)
        ?.product!;
        return userCart;
    }
    else{
      return [];
    }
  }

  returnCount(){
    let cart: cart[] = this.storageService.getcartFromStorage();
    let loggedUser:users=this.storageService.getLoggedInUser();
    if (cart.length>0) {
      let userCart: pType[] = cart.find((uc) => uc.user.id === loggedUser.id)?.product!;
      if(userCart.length){
        return userCart.length;
      }
    }
    return "";
  }

getCartUser(){
  let cart: cart[] = this.storageService.getcartFromStorage();
  let loggedUser:users=this.storageService.getLoggedInUser();
  if (cart.length > 0) {
    let userCart: users = cart.find((uc) => uc.user.id === loggedUser.id)
      ?.user!;
      return userCart;
  }
  else{
    return {};
  }
}
}