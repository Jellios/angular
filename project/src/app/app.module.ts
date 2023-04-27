import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalsComponent,
    GoalFormComponent,
    NavigationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {path: 'dashboard',component: GoalsComponent},
      {path: 'new-goal',component: GoalFormComponent},
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
