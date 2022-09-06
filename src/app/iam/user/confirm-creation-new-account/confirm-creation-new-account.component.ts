import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { USER } from '../user';
import { map } from 'rxjs/operators';
import{MaterialCComponent }from 'src/app/material-c/material-c.component';



@Component({
  selector: 'app-confirm-creation-new-account',
  templateUrl: './confirm-creation-new-account.component.html',
  styleUrls: ['./confirm-creation-new-account.component.css']
})
export class ConfirmCreationNewAccountComponent implements OnInit {
  user$: Observable<Object>;
  user: USER;
  constructor(private activateRoute: ActivatedRoute, private route: Router) {
    this.route.getCurrentNavigation().extras.state;
  }

  ngOnInit() {
    this.user$ = this.activateRoute.paramMap
      .pipe(map(() => window.history.state));
    this.user$.subscribe(data => {
      this.user = new USER().deserialize(data)
    });
  }


}
