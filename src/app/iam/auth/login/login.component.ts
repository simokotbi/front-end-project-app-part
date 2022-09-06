import { Component, OnInit } from '@angular/core';

import { USER } from '../../user/user'
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login: string = "";
  public password: string = "";
  public user: USER;
  routerLink = '/newAdminAccount';
  isAdminAccountExist;

  constructor(private httpClient: HttpClient, private loginService: LoginService, private router: Router) {
    this.user = new USER();
  }

  ngOnInit() {
  }
  public onLogin() {
    this.loginService.getUser(this.login, this.password).subscribe(user =>{
      this.user = user
      alert(user.firstname);
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.router.navigateByUrl('/content',  {state : this.user});
    },
    err => {
      console.log(err);
    }); 
  }

  navigateToSignUpPage() {
    this.httpClient.get("http://localhost:8089/user/admin").subscribe(data => {
      this.isAdminAccountExist = data;
      if (!this.isAdminAccountExist) {
        this.routerLink = '/newAdminAccount';
      } if (this.isAdminAccountExist) {
        this.routerLink = '/newAccount';
      }
      console.log(this.isAdminAccountExist);
    },
      err => {
        console.log(err);
      });
    this.router.navigate([this.routerLink]);
  }
}
