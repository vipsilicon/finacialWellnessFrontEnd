import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './core/guards/logged-in.guard';
import { LoggedOutGuard } from './core/guards/logged-out.guard';

export const routes: Routes = [
  {
    path: 'login',
    // canActivate: [LoggedOutGuard],
    loadChildren: () =>
      import('./templates/login-screen/login-screen.module').then(
        (m) => m.LoginScreenModule
      ),
  },
  {
    path: '',
    // canActivate: [LoggedInGuard],
    loadChildren: () =>
      import('./templates/admin-template/admin-template.module').then(
        (m) => m.AdminTemplateModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
