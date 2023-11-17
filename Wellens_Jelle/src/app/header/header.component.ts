import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAdmin: boolean = false;
  constructor(public _authService: AuthService) {}

  ngOnInit(): void {
    this._authService.isAdmin.subscribe((isAdmin: boolean) => {
      // Handle the value emitted by the Subject
      this.isAdmin = isAdmin;
      console.log("djfjeiejiejr" + this.isAdmin);
    });
  }
  

  onLogout(): void {
    this._authService.logout();
  }
}
