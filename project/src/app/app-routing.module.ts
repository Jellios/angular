import { NgModule } from '@angular/core';
import { RouterModule, Routes, LoadChildren } from '@angular/router';
import { AuthModule } from '@angular/fire/auth';
import { AuthGuard } from './auth.guard';
import { CanActivateAdminGuard } from './can-activate-admin.guard';

const routes: Routes = [
    // Other routes, if any
    {
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    },
    {
      path: 'timers',
      loadChildren: ()=> import('./timers/timers.module').then((m)=> m.TimersModule),
      canActivate: [AuthGuard],
    },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  canActivate: [CanActivateAdminGuard] },
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
