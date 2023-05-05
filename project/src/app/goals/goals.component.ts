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
    this.goals = this.goalService.getGoals();
  }
}
