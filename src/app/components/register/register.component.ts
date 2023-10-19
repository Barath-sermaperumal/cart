import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { pType, users } from 'src/app/model/interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  constructor(private authService:AuthService,private router:Router, private storageService:StorageService){}
  error:string="";
  
  
  onSubmit(registerForm:NgForm){
    let users:users[]=JSON.parse(localStorage.getItem("users")!);
    let updatedUser:users=this.storageService.addUser(registerForm.value);
    users.push(updatedUser);
    let newusers:users[]=users;
    localStorage.setItem("users",JSON.stringify(newusers));
    this.router.navigate(['/login'],{replaceUrl:true});
  }
}
