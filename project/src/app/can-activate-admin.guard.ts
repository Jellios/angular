import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanActivateAdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAdmin().pipe(
      map((isAdmin: boolean) => {
        if (isAdmin) {
          // User is an admin, allow access to the route
          return true;
        } else {
          // User is not an admin, redirect to a different route or deny access
          // Example: Redirect to the login page
          return this.router.createUrlTree(['/login']);
        }
      })
    );
  }
}
