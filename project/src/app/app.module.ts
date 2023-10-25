import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp} from '@angular/fire/app'
import {getFirestore, provideFirestore} from '@angular/fire/firestore'
import { environment } from 'src/environment/environment';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { TimerDetailsComponent } from './timer/timer-details/timer-details.component';
const appRoutes = [
 /* { path: 'contacts', component: ContactsComponent, children: [
    { path:'new', component:ContactEditComponent},
    { path: ':id', component: ContactDetailComponent},
    { path: ':id/edit', component: ContactEditComponent}
  ]
}, */
{path: 'signup',component: SignupComponent},
{path: 'login',component:LoginComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    TimerDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
