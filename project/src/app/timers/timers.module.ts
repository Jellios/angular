import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimersRoutingModule } from './timers-routing.module';
import { TimersComponent } from './timers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { TimersService } from './timers.service';


@NgModule({
  declarations: [
    TimersComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    TimersRoutingModule,
    FormsModule
  ],
  providers: [TimersService, AuthService]
})
export class TimersModule { 
  constructor () {
    console.log("timers module");
  }
}
