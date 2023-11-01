import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { TimersRoutingModule } from './timers-routing.module';
import { TimersComponent } from './timers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { TimersService } from './timers.service';
import { TimerDetailsComponent } from './timer-details/timer-details.component';
import { NewTimerComponent } from './new-timer/new-timer.component';


@NgModule({
  declarations: [
    TimersComponent,
    DashboardComponent,
    TimerDetailsComponent,
    NewTimerComponent
  ],
  imports: [
    CommonModule,
    TimersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TimersService, AuthService,DatePipe]
})
export class TimersModule { 
  constructor () {
    console.log("timers module");
  }
}
