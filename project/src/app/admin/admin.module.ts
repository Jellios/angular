import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TimersService } from '../timers/timers.service';
import { AuthService } from '../auth/auth.service';


@NgModule({
  declarations: [
    AdminComponent,
    UserOverviewComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [TimersService, AuthService,DatePipe]
  
})
export class AdminModule { }
