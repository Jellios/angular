import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimersRoutingModule } from './timers-routing.module';
import { TimersComponent } from './timers.component';


@NgModule({
  declarations: [
    TimersComponent
  ],
  imports: [
    CommonModule,
    TimersRoutingModule
  ]
})
export class TimersModule { }
