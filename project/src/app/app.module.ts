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
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EdditGoalComponent } from './eddit-goal/eddit-goal.component'; // Import
import { DatePipe } from '@angular/common';
import { ShortenTextPipe } from './shorten-text.pipe';



@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalsComponent,
    GoalFormComponent,
    NavigationComponent,
    DashboardComponent,
    EdditGoalComponent,
    ShortenTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: GoalsComponent },
      { path: 'new-goal', component: GoalFormComponent },
      { path: 'edit/:id', component: EdditGoalComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      { path: '**', redirectTo: '/dashboard', pathMatch: 'full'},
    ]),


  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
