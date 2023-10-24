import { Component, Input, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  constructor (private timerService: TimerService) {}
   aantalSeconden: number = 0;
 @Input() startTime:Date = new Date();
 @Input() endTime: Date = new Date();
 @Input() verschil: number = 0;
 
ngOnInit(): void {
 // this.timerService.startTimer(this.aantalSeconden);
  this.timerService.TimerDone.subscribe(
   () => {
    this.endTime = new Date();
    this.verschil = this.endTime.getTime() - this.startTime.getTime();
   }
  )
}
onClick() {
  this.startTime = new Date();
  this.timerService.startTimer(this.aantalSeconden);
}
getTimeFromDate(tmpDate: Date): number {
  return tmpDate.getTime();
}
}
