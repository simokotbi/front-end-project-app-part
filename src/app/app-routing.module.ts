import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './iam/auth/login/login.component';
import { NewAccountComponent } from './iam/user/new-account/new-account.component';
import { NewAdminAccountComponent } from './iam/user/new-admin-account/new-admin-account.component';
import { HomeComponent } from './home/home.component';
import { ConfirmCreationNewAccountComponent } from './iam/user/confirm-creation-new-account/confirm-creation-new-account.component';
import { USER } from './iam/user/user';


const appRoutes: Routes = [
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "newAccount",
    component : NewAccountComponent
  },
  {
    path : "newAdminAccount",
    component : NewAdminAccountComponent
  },
  {
    path : "confirm",
    component : ConfirmCreationNewAccountComponent
  },
  {
    path: 'content',
    loadChildren: () => import('./content/content.module').then(mod => mod.ContentModule),
    data: { preload: true }
  },
  {
    path : "home",
    component : HomeComponent
  },
  {
    path : "",
    component : HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
