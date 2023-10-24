import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalServiceService } from '../goal-service.service';


@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit
{


  goals: Goal[] = [];

  constructor(private goalService: GoalServiceService) { }

  ngOnInit() {
this.onGetGoals();
  }
  onGetGoals(): void {
    this.goalService.getGoalsFromDB().subscribe({
      next: (response: Goal[]) => {
        console.log('received goals: ', response);
        this.goals = response;
      },
      error: (error) => console.log('error: ', error),
      complete: () => console.log('ready!')
    });
  }

  onGoalDeleted(deletedGoal: Goal) {
    this.goals = this.goals.filter(goal => goal.id !== deletedGoal.id);
  }


}
