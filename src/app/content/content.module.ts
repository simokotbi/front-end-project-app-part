import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content.component';
import { ContentRoutingModule } from './content-routing.module';

import { BodyComponent } from './body/body.component';
import { ErrorComponent } from './error/error.component';
import { UserProfileComponent } from '../iam/user/user-profile/user-profile.component';
import { UsersComponent } from '../iam/user/users/users.component';
import { UserComponent } from '../iam/user/user/user.component';
import { ProfilesComponent } from '../iam/profile/profiles/profiles.component';
import { RolesComponent } from '../iam/role/roles/roles.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{MaterialCComponent }from 'src/app/material-c/material-c.component';
@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,   
    ContentComponent,
    BodyComponent,
    ErrorComponent,
    UserProfileComponent,
    UsersComponent,
    UserComponent,
    ProfilesComponent,
    RolesComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    AgGridModule.withComponents([]),
    FormsModule, 
    ReactiveFormsModule,
    MaterialCComponent
    ],
  exports: [
    HeaderComponent, 
    ContentComponent,
    BodyComponent, 
    ErrorComponent,
    MaterialCComponent
    ]
})
export class ContentModule { }
