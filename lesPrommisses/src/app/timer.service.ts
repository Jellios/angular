import { Injectable } from '@angular/core';
import { Observable, interval, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  TimerDone = new Subject<string>();
  
  constructor() {
    
   }
  /* startTimer(timeDing:number): Observable<number> {
    console.log(timeDing);
    return interval(timeDing*1000);
   } */
   startTimer(timeDing: number):void{
    setTimeout(() => {
      this.TimerDone.next('timerdone');
      console.log("done");
    }, timeDing*1000);

   }


}
