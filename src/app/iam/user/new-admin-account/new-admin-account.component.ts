import { Component, OnInit } from '@angular/core';
import { USER } from '../user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import{MaterialCComponent }from 'src/app/material-c/material-c.component';
@Component({
  selector: 'app-new-admin-account',
  templateUrl: './new-admin-account.component.html',
  styleUrls: ['./new-admin-account.component.css']
})
export class NewAdminAccountComponent implements OnInit {
  public user: USER;
  formdata;

  constructor(private userService: UserService, private router: Router) { 
    this.user = new USER();
  }

  ngOnInit() {
    this.formdata = new FormGroup({
      login: new FormControl("admin", Validators.compose([
         Validators.required
      ])),
      password: new FormControl("123456", Validators.compose([
        Validators.required
     ])),
      password2: new FormControl("123456", Validators.compose([
        Validators.required,
     ])),
      phoneNumber: new FormControl("0661663668", Validators.compose([
        Validators.required,
     ])),
      mailAdress: new FormControl("e.kotbi@gmail.com", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
     ]))

   });
  }

  public createAdminAccount(data){
    this.userService.createAdminAccount(data).subscribe(user => {
      this.user = user;
      console.log(user);
      this.router.navigateByUrl('/confirm',  {state : this.user});
    },
    err=>{
      console.log(err);
    });
  }

}
