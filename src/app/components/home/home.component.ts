import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pType } from 'src/app/model/interface';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  // constructor(private router:Router){}
  constructor(private cartservice:CartService, private storage:StorageService,private productService:ProductService){}
  products:pType[]=[];
  activeUser:pType=JSON.parse(localStorage.getItem("loggedInUser") as string);
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (response)=>{
        this.products=response as pType[];
        this.storage.setProductToStorage(this.products);
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  addToCart(id:number,userId:number){
    this.cartservice.addToCart(id,userId);
  }

  
}
