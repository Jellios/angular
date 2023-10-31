import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { TimersRoutingModule } from './timers-routing.module';
import { TimersComponent } from './timers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { TimersService } from './timers.service';
import { TimerDetailsComponent } from './timer-details/timer-details.component';


@NgModule({
  declarations: [
    TimersComponent,
    DashboardComponent,
    TimerDetailsComponent
  ],
  imports: [
    CommonModule,
    TimersRoutingModule,
    FormsModule
  ],
  providers: [TimersService, AuthService,DatePipe]
})
export class TimersModule { 
  constructor () {
    console.log("timers module");
  }
}
