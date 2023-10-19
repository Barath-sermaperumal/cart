import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  constructor(private service:CartService, private storageService:StorageService,private route:Router){}
  returnCount(){
    return this.service.returnCount();
  }
  remove(){
    this.storageService.removeLoggedInUser();
    this.route.navigate(['/login'],{replaceUrl:true});
  }
}
