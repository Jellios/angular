import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import {environment} from '../environment/environment';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormsModule } from '@angular/forms';
const appRoutes = [
  { path: 'contacts', component: ContactsComponent, children: [
    { path:'new', component:ContactEditComponent},
    { path: ':id', component: ContactDetailComponent},
    { path: ':id/edit', component: ContactEditComponent}
  ]
},
{path: 'signup',component: SignupComponent},
{path: 'login',component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactEditComponent,
    ContactDetailComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() =>getFirestore()),
    provideAuth(() => getAuth()),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



