import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import { environment } from 'src/environment/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AuthGuard } from './auth.guard';
import { CanComponentDeactivateGuard } from './can-component-deactivate.guard';
import { AuthService } from './auth/auth.service';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
   
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor () {
    console.log("app module");
  }
 }
