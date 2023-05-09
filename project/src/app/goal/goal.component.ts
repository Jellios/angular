import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Goal } from '../goal';
import { GoalServiceService } from '../goal-service.service';
import { faL, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1})),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300)
      ]),
      transition(':leave',
      animate(300, style({ opacity: 0 })))
    ])
  ]
})

export class GoalComponent implements OnInit {
  isHovered: boolean = false;

  toggleHover() {
    this.isHovered = !this.isHovered;
  }
  showGoal = false;
   settingsToggled: boolean = false;

  @Output() goalDeleted = new EventEmitter<Goal>();


  @Input() goal: Goal = {
    id: 0,
    startDate: new Date(),
    title: '',
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
    this.goal.time = "";
    setInterval(() => {
      this.currentTime++;
      this.progressInSeconds = Math.floor((new Date().getTime() - this.goal.startDate.getTime()) / 1000);
      this.days = Math.floor(this.progressInSeconds / (24 * 60 * 60));
      this.hours = Math.floor((this.progressInSeconds % (24 * 60 * 60)) / (60 * 60));
      this.minutes = Math.floor((this.progressInSeconds % (60 * 60)) / 60);
      this.seconds = Math.floor(this.progressInSeconds % 60);
      this.progress= `${this.days} days, ${this.hours} hours, ${this.minutes} minutes, ${this.seconds} seconds`;
      this.showGoal = true;
    }, 1000);
  }
  resetTime()
  {
    this.goal.time = "0";
    this.currentTime = 0;
    this.goal.startDate = new Date();
    this.goalService.editGoal(this.goal).subscribe(
      (response: Goal) => {
        console.log("reset time for: ",this.goal);
      }
    );
    this.settingsToggled = false;
  }


  onDeleteGoal(): void {
    this.goalService.deleteGoalFromDB(this.goal.id).subscribe(
      (response: any) => {
        console.log('deleted goal: ', response);
        this.goalDeleted.emit(this.goal);
      }
    )
  }


  toggleOptions(): void {
    if (this.settingsToggled)
    {
      this.settingsToggled = false;
    }
    else
    {
      this.settingsToggled = true;
    }
  }



ngOnInit(): void {


  setInterval(() => {
    this.currentTime++;
    this.progressInSeconds = Math.floor((new Date().getTime() - this.goal.startDate.getTime()) / 1000);
    this.days = Math.floor(this.progressInSeconds / (24 * 60 * 60));
    this.hours = Math.floor((this.progressInSeconds % (24 * 60 * 60)) / (60 * 60));
    this.minutes = Math.floor((this.progressInSeconds % (60 * 60)) / 60);
    this.seconds = Math.floor(this.progressInSeconds % 60);
    this.progress= `${this.days} days, ${this.hours} hours, ${this.minutes} minutes, ${this.seconds} seconds`;
    this.showGoal = true;
  }, 1000);


}

}
