import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'cart';
  constructor(private storageService:StorageService,private authService:AuthService){}
  ngOnInit(): void {
    this.storageService.getAllUsers();
    this.storageService.loadStorage();
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

}
