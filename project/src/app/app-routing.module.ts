import { NgModule } from '@angular/core';
import { RouterModule, Routes, LoadChildren } from '@angular/router';
import { AuthModule, SignInMethod } from '@angular/fire/auth';
import { AuthGuard } from './auth.guard';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: SignupComponent },
  {
    path: 'timers',
    loadChildren: () => import('./timers/timers.module').then((m) => m.TimersModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)
    
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' }, 
  { path: '**', redirectTo: 'auth/login' }, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
