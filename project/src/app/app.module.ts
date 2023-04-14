import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalsComponent,
    GoalFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
