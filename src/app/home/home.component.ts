import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { UserService } from '../iam/user/user.service';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  routerLink = '/newAccount';
  isAdminAccountExist;
  constructor(private userService: UserService, private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {

  }

  navigateToSignUpPage() {

    this.isAdminAccountExist = this.userService.verifyIsAdminAccountExist().subscribe
      (data => {
        this.isAdminAccountExist = data;
        console.log(this.isAdminAccountExist);
        if (!this.isAdminAccountExist) {
          this.routerLink = '/newAdminAccount';
        } if (this.isAdminAccountExist) {
          this.routerLink = '/newAccount';
        }
        this.router.navigate([this.routerLink]);
      },
        err => {
          console.log(err);
          this.router.navigate([this.routerLink]);
        });


  }
}
