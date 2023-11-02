import { Component, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  logedIn:boolean = false;
  constructor(private _authService: AuthService, private cd: ChangeDetectorRef) {}
  onLogout(): void {
    this._authService.logout();
    this.cd.detectChanges();
  }
  get authService() {
    return this._authService;
  }
  
}
