import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GoalServiceService } from './goal-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  constructor(public goalService: GoalServiceService) { };
}
