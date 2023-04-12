import { Injectable } from '@angular/core';
import { Goal } from './goal';

@Injectable({
  providedIn: 'root'
})
export class GoalServiceService {
  public goalList: Goal[] = [
    {
      startDate: new Date("2023-03-19T10:30:00"),
      titel: "gestopt met roken",
      description: "gestopt met roken na ontspanningsweekend met de chiro",
      time: ""
    },
    {
      startDate: new Date("2023-03-22T09:00:00"),
      titel: "lorem ipsum lorem ipsum lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra, lacus non tristique euismod, felis odio sodal",
      time: ""
    }
  ];
  constructor() { }
  getGoals(): Goal[] {
    return this.goalList;
  }
  addGoal(goal: Goal) {
    this.goalList.push(goal);
  }
  editGoal(i: number, goal: Goal)
  {
    this.goalList[i] = goal;
  }
  deleteGoal(i:number)
  {
    this.goalList.splice(i,1);
  }
}
