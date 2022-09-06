import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { USER } from '../iam/user/user';
import { ActivatedRoute, Router } from '@angular/router';
import{MaterialCComponent}from 'src/app/material-c/material-c.component'
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  user$: Observable<USER>;
  user: USER;
  private currentUserSubject: BehaviorSubject<USER>;

  constructor(private activateRoute: ActivatedRoute, private route: Router) {
    this.currentUserSubject = new BehaviorSubject<USER>(JSON.parse(localStorage.getItem('currentUser')));
  }

  ngOnInit() {
      this.user = this.currentUserValue();
  }

  public  currentUserValue(): USER {
    return this.currentUserSubject.value;
  }

}
