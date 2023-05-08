import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Goal } from '../goal';
import { GoalServiceService } from '../goal-service.service';

@Component({
  selector: 'app-eddit-goal',
  templateUrl: './eddit-goal.component.html',
  styleUrls: ['./eddit-goal.component.css']
})
export class EdditGoalComponent implements OnInit {
  goal: Goal = {
    id: 0,
    time:'',
    startDate: new Date(),
    titel: "",
    description: "",
  }

  constructor(private route: ActivatedRoute, private goalsService: GoalServiceService, private router: Router) { }

  ngOnInit(): void {
    const goalId = this.route.snapshot.paramMap.get('id');
    if (goalId) {
      this.goalsService.getGoalById(Number(goalId)).subscribe((goal: Goal) => {
        this.goal = goal;
      });
    }
  }

  setTitel(event: Event): void {
    if (this.goal) {
      const target = event.target as HTMLInputElement;
      this.goal.titel = target.value;
    }
  }

  onSubmit(): void {

    this.goalsService.editGoal(this.goal).subscribe(
      (response: Goal) => {
        console.log('Goal updated: ', this.goal);

      }
    );
      this.router.navigate(['dashboard']);
  }
}
