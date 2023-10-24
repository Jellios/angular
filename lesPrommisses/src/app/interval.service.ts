import { Injectable, OnInit } from '@angular/core';
import { Observable, Subscriber, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntervalService implements OnInit {
  
  number: number = 0;
  constructor() { }
 
  ngOnInit(): void {
    
  }
  doeDing(): Observable<number> {
    return interval(2000); // Emit a value every 2000 milliseconds (2 seconds)
  }
}
