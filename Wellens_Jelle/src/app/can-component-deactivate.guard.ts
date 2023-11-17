import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TimerDetailsComponent } from './timers/timer-details/timer-details.component';

@Injectable({
  providedIn: 'root'
})
export class CanComponentDeactivateGuard implements CanDeactivate<TimerDetailsComponent> {
  canDeactivate(
    component: TimerDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.saved === false) {
      return confirm('Do you want to discard the changes you made?');
    } else {
      return true;
    }
  }  
}
