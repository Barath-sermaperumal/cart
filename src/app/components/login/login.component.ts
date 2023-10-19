import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private authservice:AuthService, private router:Router){}
  error:string="";
  onSubmit(loginForm:NgForm):void
  {
    if(this.authservice.isValidUser(loginForm!.value)){
      this.router.navigate(['/home'],{replaceUrl:true});
    }
    else{
      this.error="Invalid Credentials"
    }
  }

}
