import { Component, EventEmitter, Output } from '@angular/core';
import { Goal } from '../goal';
import { eventListeners } from '@popperjs/core';
import { GoalServiceService } from '../goal-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent {
  startDate: Date = new Date();
  title: string = "";
  description: string = "";

  goal: Goal = {
    id: 0,
    startDate: new Date(),
    title: '',
    description: '',
    time: ""
  };

constructor(private goalService: GoalServiceService, private activatedRoute: ActivatedRoute, private router: Router) {}

  onSubmit() {
   this.goal.title = this.title;
    this.goal.startDate = new Date(this.startDate);
    this.goal.description = this.description;
    this.goalService.addGoalToDB(this.goal).subscribe({
      next: (response) => {
        console.log('Goal added: ', response);
      },
      error: (error) => console.log('error: ', error)
    });

    /*this.goalService.addGoal(this.goal); */

   this.startDate = new Date();
    this.title = '';
    this.description = '';
    this.router.navigate(['dashboard'])

  }
}
