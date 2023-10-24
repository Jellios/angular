import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickserviceService {

  constructor() { }
   numberOfClicks:number = 0;
   getNumberOfClicks(): number
   {
    return this.numberOfClicks;
   }
}
