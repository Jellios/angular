import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalServiceService } from '../goal-service.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  goalList: Goal[] = [];

  constructor(private goalService: GoalServiceService) { }

  ngOnInit(): void {
    this.goalList = this.goalService.getGoals();
    setInterval(() => {
      this.updateGoalTimes();
    }, 1000);
  }

  updateGoalTimes(): void {
    for (let i = 0; i < this.goalList.length; i++) {
      const startDate = this.goalList[i].startDate;
      const now = new Date();
      const diff = Math.abs(now.getTime() - startDate.getTime()) / 1000; // difference in seconds
      const days = Math.floor(diff / 86400);
      const hours = Math.floor(diff % 86400 / 3600);
      const minutes = Math.floor(diff % 3600 / 60);
      const seconds = Math.floor(diff % 60);
      this.goalList[i].time = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }
  }
  onGoalAdded(newGoal: Goal): void {
    this.goalService.addGoal(newGoal);
    this.goalList = this.goalService.getGoals();
    this.updateGoalTimes();
  }
  onDeleteGoal(selectedGoal: Goal): void {
    const index = this.getSelectedGoal(selectedGoal);
    this.goalList.splice(index,1);

  }
  getSelectedGoal(selectedGoal: Goal): number {
    const index = this.goalList.indexOf(selectedGoal);
    return index;
  }
  onResetTime(selectedGoal: Goal): void {
    const index = this.getSelectedGoal(selectedGoal);
    this.goalList[index].startDate = new Date();
  }

}
