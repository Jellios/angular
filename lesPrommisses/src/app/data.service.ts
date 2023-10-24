import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  valid = true;

  userData = [
    {name: 'Harry Potter', age: 12},
    {name: 'Albus Dumbledore', age: 91},
    {name: 'Rubeus Hagrid', age: 40},
    {name: 'Hermione Granger', age: 13}
  ];

  constructor() { }

 readData(): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!this.valid)
      {
        reject ('The userdata is invalid');
      }
      else
      {
        resolve(this.userData);
      }
    },200);
  });
 }
 getUserData(): Promise<Array<User>> {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      if (!this.valid)
      {
        reject('The userdata is invalid');
      }
      else
      {
        resolve(this.userData);
      }
    },2000);
  });
 }
}
