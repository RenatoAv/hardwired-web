import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'montagem', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./private/private.module').then(m => m.PrivateModule), canActivate: [AuthGuard] },
  { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
