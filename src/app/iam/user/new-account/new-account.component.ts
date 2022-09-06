import { Component, OnInit } from '@angular/core';
import { USER } from '../user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import{MaterialCComponent }from 'src/app/material-c/material-c.component';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  public user: USER;
  formdata;

  constructor(private userService: UserService, private router: Router) { 
    this.user = new USER();
  }

  ngOnInit() {
    this.formdata = new FormGroup({
      firstname: new FormControl("", Validators.compose([
         Validators.required
      ])),
      lastname: new FormControl("", Validators.compose([
        Validators.required
     ])),
      password: new FormControl("", Validators.compose([
        Validators.required
     ])),
      password2: new FormControl("", Validators.compose([
        Validators.required,
     ])),
      phoneNumber: new FormControl("", Validators.compose([
        Validators.required,
     ])),
     mailAdress: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
     ]))

   });
  }

  public createNewAccount(data){
    this.userService.createNewAccount(data).subscribe(user => {
      this.user = user;
      console.log(user);
      this.router.navigateByUrl('/confirm',  {state : this.user});
    },
    err=>{
      console.log(err);
    });
  }
}
