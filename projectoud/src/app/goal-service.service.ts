import { Injectable } from '@angular/core';
import { Goal } from './goal';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { GoalComponent } from './goal/goal.component';
import { tap } from 'rxjs/operators';
import { NavigationComponent } from './navigation/navigation.component';
import { AppComponent } from './app.component';


@Injectable({
  providedIn: 'root'
})
export class GoalServiceService {
  public goalList: Goal[] = [];
/*  public goalList: Goal[] = [
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
  ]; */
  constructor(private http: HttpClient) { }
  getGoals(): Goal[] {
    return this.goalList;
  }
  getGoalsFromDB(): Observable<Goal[]> {
    const url = "http://localhost:3000/goals";
    return this.http.get<Goal[]>(url).pipe(
      map((response: any[]) => {
        return response.map(goal => ({
          id: goal.id,
          startDate: new Date(goal.startDate),
          title: goal.title,
          description: goal.description,
          time: goal.time
        }));
      })
    );
  }
  addGoal(goal: Goal) {
    this.goalList.push(goal);
  } //van INDEXEN NAAR GOAL OBJECTEN AAN HET GAAN
  addGoalToDB(goal: Goal): Observable<Goal>
  {
    const url = "http://localhost:3000/goals";
    return this.http.post<Goal>(url, {id: goal.id, startDate: goal.startDate, title: goal.title, description: goal.description });
  }
  editGoal(x: Goal)
  {
   const url = "http://localhost:3000/goals/" + x.id;
   return this.http.put<Goal>(url,x);

  }
  deleteGoal(x: Goal)
  {
    //this.goalList.splice(i,1);
    let i = 0;
    i = this.getIndex(x);
    this.goalList.splice(i,1);
  }
  deleteGoalFromDB(id: number) {
    const url = "http://localhost:3000/goals/" + id;
    return this.http.delete(url).pipe(
      tap(() => {
        const index = this.goalList.findIndex(goal => goal.id === id);
        if (index > -1) {
          this.goalList.splice(index, 1);
        }
      })
    );
  }

  getGoalById(id: number): Observable<Goal> {
    const url = "http://localhost:3000/goals/" + id;
    return this.http.get<Goal>(url);
  }

  getIndex(x: Goal):number
  {
    return this.goalList.indexOf(x);

  }
}
