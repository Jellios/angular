import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';
import { Timer } from './timer';
import { Observable, tap } from 'rxjs';
import { Timestamp } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TimersService {
  timerList: Timer[] = [];
  selectedTimerId: number = -1;
  constructor(private backendservice: BackendService) {
    this.getAllTimers();
  }

  getAllTimers(): Observable<Timer[]> {


    

    return this.backendservice.getAllTimers().pipe(
      tap((timers) => {
        this.timerList = timers;
        console.log(timers);
      })
    );
  }
  timestampToDate(tStamp: Timestamp): Date {
    const firestoreTimestamp: Timestamp = tStamp;
    const date: Date = firestoreTimestamp.toDate();
    return date;
  }
  calculateTimeAgo(startDate: Date): string {
    
    const currentDate = new Date(); 
    const timeDifference = currentDate.getTime() - startDate.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    return `${days} days, ${hours % 24} hours, ${minutes % 60} minutes, ${seconds % 60} seconds ago`;
  }
 

  updateTimer()
  {
    this.backendservice.updateTimer(
      this.timerList[this.selectedTimerId].title,
      this.timerList[this.selectedTimerId].description,
      this.timerList[this.selectedTimerId].startDate,
      this.timerList[this.selectedTimerId].userID
    );
  }
  addTimer(timer: Timer)
  {
    this.backendservice.addTimer(timer);

  }
  deleteTimer(x: number) {
    if (x >= 0 && x < this.timerList.length) {
        const timerId = this.timerList[x].id; 
        this.backendservice.deleteTimer(timerId).subscribe(() => {
           
            this.timerList.splice(x, 1);
        });
    }
}


}
