import { Injectable } from '@angular/core';
import { users } from '../model/interface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private storageService:StorageService) { }
  isTrue=false;
  isValidUser(user:users):boolean{
    let users=this.storageService.getAllUsers();
    for(let u of users){
      if(u.email===user.email && u.password === user.password){
        this.storageService.setLoggedInUser(u);
        sessionStorage.setItem("userID",JSON.stringify(u.id));
        this.isTrue=true;
        break;
      }
    }
    return this.isTrue;
  }

  isLoggedIn(){
    return this.storageService.isUserLoggedIn();
  }
}
