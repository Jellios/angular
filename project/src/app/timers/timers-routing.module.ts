import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimersComponent } from './timers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimerDetailsComponent } from './timer-details/timer-details.component';
import { NewTimerComponent } from './new-timer/new-timer.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'timerDetails',
    component: TimerDetailsComponent
  },
  {
    path: 'newTimer',
    component: NewTimerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimersRoutingModule { }
