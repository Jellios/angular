import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClicksComponent } from './clicks/clicks.component';
import { ClickCounterDirective } from './click-counter.directive';
import { RenderingDelayDirective } from './rendering-delay.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClicksComponent,
    ClickCounterDirective,
    RenderingDelayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
