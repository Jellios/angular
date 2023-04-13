import { Component, EventEmitter, Output } from '@angular/core';
import { Goal } from '../goal';
import { eventListeners } from '@popperjs/core';

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
    startDate: new Date(),
    titel: '',
    description: '',
    time: ""
  };
  @Output() goalAdded = new EventEmitter<Goal>();

  onSubmit() {

    this.goal.titel = this.title;
    this.goal.startDate = new Date(this.startDate);
    this.goal.description = this.description;
    this.goalAdded.emit(this.goal);
    this.startDate = new Date();
    this.title = '';
    this.description = '';
  }
}
