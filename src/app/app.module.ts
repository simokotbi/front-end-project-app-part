import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './iam/auth/login/login.component';
import { NewAccountComponent } from './iam/user/new-account/new-account.component';
import { NewAdminAccountComponent } from './iam/user/new-admin-account/new-admin-account.component';
import { HomeComponent } from './home/home.component';
import { ConfirmCreationNewAccountComponent } from './iam/user/confirm-creation-new-account/confirm-creation-new-account.component';
import { MaterialCComponent } from './material-c/material-c.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewAccountComponent,
    NewAdminAccountComponent,
    HomeComponent,
    ConfirmCreationNewAccountComponent,
    MaterialCComponent,
    

   
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    MaterialCComponent,
    MatSnackBarModule,
    MatCheckboxModule,
    
                                                          
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(appRoutes: Router) {
  }
 }


