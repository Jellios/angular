import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private _authService: AuthService) {}
  onLogout(): void {
    this._authService.logout();
  }
  get authService() {
    return this._authService;
  }
}
