import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { IntervalComponent } from './interval/interval.component';
import { TimerComponent } from './timer/timer.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/interval', pathMatch: 'full' },
  { path: 'users', component: ListOfUsersComponent},
  {path: 'interval', component: IntervalComponent},
  {path: 'timer',component: TimerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListOfUsersComponent,
    NavbarComponent,
    IntervalComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
