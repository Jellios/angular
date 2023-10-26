import { NgModule } from '@angular/core';
import { RouterModule, Routes, LoadChildren } from '@angular/router';
import { AuthModule } from '@angular/fire/auth';

const routes: Routes = [
    // Other routes, if any
    {
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    },
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
