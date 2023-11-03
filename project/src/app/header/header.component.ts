import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAdmin: boolean = false;
  constructor(private _authService : AuthService){}
  

ngOnInit(): void {
 this.authService.isAdmin.subscribe({
  next:(x: boolean) => {
    console.log('in header is x: ' + x);
    this.isAdmin = x;
  }
 })
}

  onLogout(): void{
    this._authService.logout();
  }
  get authService(){
    return this._authService;
  }
}