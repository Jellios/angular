import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
export class authGuard implements CanActivate

