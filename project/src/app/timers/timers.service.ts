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
}
