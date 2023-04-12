import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  GOAL: Goal = {
    startDate : new Date("2023-03-19T10:30:00"),
    titel : "Gestopt met roken",
    description : "gestopt met roken na ontspanningsweekend met de chiro",
    time: "0"
  }
  currentTime: number = 0;
  progressInSeconds: number = 0;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor() {

    setInterval(() => {
      this.currentTime++;
      this.progressInSeconds = Math.floor((new Date().getTime() - this.GOAL.startDate.getTime()) / 1000);
      this.days = Math.floor(this.progressInSeconds / (24 * 60 * 60));
      this.hours = Math.floor((this.progressInSeconds % (24 * 60 * 60)) / (60 * 60));
      this.minutes = Math.floor((this.progressInSeconds % (60 * 60)) / 60);
      this.seconds = Math.floor(this.progressInSeconds % 60);
    }, 1000);
  }
ngOnInit(): void {



}

}
