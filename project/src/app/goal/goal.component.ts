import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Goal } from '../goal';
import { GoalServiceService } from '../goal-service.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})

export class GoalComponent implements OnInit {



  @Input() goal: Goal = {
    startDate: new Date(),
    titel: '',
    description: '',
    time: ""
  };
  currentTime: number = 0;
  progressInSeconds: number = 0;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  progress: string = "";

  constructor(private goalService: GoalServiceService) {

    setInterval(() => {
      this.currentTime++;
      this.progressInSeconds = Math.floor((new Date().getTime() - this.goal.startDate.getTime()) / 1000);
      this.days = Math.floor(this.progressInSeconds / (24 * 60 * 60));
      this.hours = Math.floor((this.progressInSeconds % (24 * 60 * 60)) / (60 * 60));
      this.minutes = Math.floor((this.progressInSeconds % (60 * 60)) / 60);
      this.seconds = Math.floor(this.progressInSeconds % 60);
      this.progress= `${this.days} days, ${this.hours} hours, ${this.minutes} minutes, ${this.seconds} seconds`;

    }, 1000);
  }
  resetTime()
  {
    this.goal.time = "0";
    this.currentTime = 0;
    this.goal.startDate = new Date();
  }
  onDeleteGoal()
  {
   // this.goalService.deleteGoal()
  }
ngOnInit(): void {

  setInterval(() => {

  }, 1000);

}

}
