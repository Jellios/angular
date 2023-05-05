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
      titel: "ddddddd ipsum lorem ipsum lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra, lacus non tristique euismod, felis odio sodal",
      time: ""
    },
    {
      startDate: new Date("2023-03-22T09:00:00"),
      titel: "aaaaa ipsum lorem ipsum lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra, lacus non tristique euismod, felis odio sodal",
      time: ""
    },
    {
      startDate: new Date("2023-03-22T09:00:00"),
      titel: "eeeee ipsum lorem ipsum lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra, lacus non tristique euismod, felis odio sodal",
      time: ""
    },
    {
      startDate: new Date("2023-03-22T09:00:00"),
      titel: "ccccccc ipsum lorem ipsum lorem ipsum",
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
  } //van INDEXEN NAAR GOAL OBJECTEN AAN HET GAAN
  editGoal(x: Goal)
  {
    let i = 0;
    i = this.getIndex(x);
    this.goalList[i] = x;
  }
  deleteGoal(x: Goal)
  {
    //this.goalList.splice(i,1);
    let i = 0;
    i = this.getIndex(x);
    this.goalList.splice(i,1);
  }
  getIndex(x: Goal):number
  {
    return this.goalList.indexOf(x);
  }
}
