import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';
import { BodyComponent } from './body/body.component';
import { ErrorComponent } from './error/error.component';
import { UserProfileComponent } from '../iam/user/user-profile/user-profile.component';
import { UsersComponent } from '../iam/user/users/users.component';
import { UserComponent } from '../iam/user/user/user.component';
import { ProfilesComponent } from '../iam/profile/profiles/profiles.component';
import { RolesComponent } from '../iam/role/roles/roles.component';
const contentRoutes: Routes = [
  /*{ 
    path: '',   
    redirectTo: '/error', 
    pathMatch: 'full' ,  
    outlet: 'sideBar'
  },*/
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path : '',
        component : BodyComponent,
        children:[
          {
          path: 'error', 
          component : ErrorComponent
          },
          {
          path: 'users', 
          component : UsersComponent
          },
          {
            path: 'profiles', 
            component : ProfilesComponent
          },
          {
          path: 'profile', 
          component : UserProfileComponent
          },
          {
          path: 'roles', 
          component : RolesComponent
          },
          {
          path: 'user/:id', 
          component : UserComponent
          }
        ]
      }
    ]
      
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(contentRoutes)
  ],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
