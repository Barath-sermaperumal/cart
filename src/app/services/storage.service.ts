import { Injectable } from '@angular/core';
import { cart, pType, users } from '../model/interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService  {
  constructor() {}
  carts: pType[]=[];
  products: pType[] = [];
  users:users[]=[];

  getRandomNumber(max = 1000):number{
    return Math.floor(Math.random() * max);
  };
  
  // creating user id
  getRandomId():string {
    for (let i = 0; i < 10000; i++) {
      const randomId = this.getRandomNumber();
  
      const checkingId = this.products.find((obj) => obj.id === randomId);
      if (!checkingId) {
        let id:string=randomId.toString();
        return id;
      }
    }
    return "";
  };

  addUser(user:users):users{
    return {id: parseInt(this.getRandomId()),
      email:user.email,
      password:user.password,}
  }

  setLoggedInUser(user:users){
    localStorage.setItem("loggedInUser",JSON.stringify(user));
    sessionStorage.setItem("user",JSON.stringify(user));
  }

  getLoggedInUser(){
    return JSON.parse(sessionStorage.getItem("user")!);
  }
  
  removeLoggedInUser(){
    localStorage.removeItem("loggedInUser");
  }

  isUserLoggedIn(){
    return localStorage.getItem("loggedInUser")!==null;
  }

  loadStorage(){
    if(!localStorage.getItem("cart")){
      localStorage.setItem("cart",JSON.stringify(this.carts));
    }
    if(!localStorage.getItem("users")){
      localStorage.setItem("users",JSON.stringify(this.users));
    }
  }

  getAllUsers():users[]{
    return JSON.parse(localStorage.getItem("users") as string);
  }

  setProductToStorage(products:pType[]){
    localStorage.setItem("products",JSON.stringify(products));
  }

  getProductFromStorage():pType[]{
    return JSON.parse(localStorage.getItem("products")!);

  }

    //change
  getcartFromStorage():cart[]{
    return JSON.parse(localStorage.getItem("cart")!);
  }

  setcartToStorage(cart:cart[]){
    localStorage.setItem("cart",JSON.stringify(cart));
  }





}
