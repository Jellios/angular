import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TimersService } from '../timers/timers.service';
import { AuthService } from '../auth/auth.service';
import { TableDirective } from '../table.directive';
import { IsAdminPipe } from './is-admin.pipe';
import { AdminGuard } from '../admin.guard';
import { FormsModule } from '@angular/forms';

import { Storage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AdminComponent,
    UserDetailsComponent,
    TableDirective,
    IsAdminPipe,
    UserOverviewComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  providers: [TimersService, AuthService,DatePipe,AdminGuard]
  
})
export class AdminModule { }
