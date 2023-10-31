import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';
import { Timer } from './timer';
import { Observable } from 'rxjs';
import { Timestamp } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TimersService {
  //timerList: Timer[] = [];

  constructor(private backendservice: BackendService) {
    this.getAllTimers();
  }

  getAllTimers(): Observable<Timer[]> { // Make sure to specify the return type
    return this.backendservice.getAllTimers(); // Return the Observable
  }
  timestampToDate(tStamp: Timestamp): Date {
    const firestoreTimestamp: Timestamp = tStamp;
    const date: Date = firestoreTimestamp.toDate();
    return date;
  }
  calculateTimeAgo(startDate: Date): string {
    
    const currentDate = new Date(); // Use your current date and time here
    const timeDifference = currentDate.getTime() - startDate.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    return `${days} days, ${hours % 24} hours, ${minutes % 60} minutes, ${seconds % 60} seconds ago`;
  }
 
}
