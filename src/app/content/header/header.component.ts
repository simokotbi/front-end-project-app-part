import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { USER } from 'src/app/iam/user/user';
import { map } from 'rxjs/operators';
import{MatButtonModule}from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$: Observable<USER>;
  user: USER;
  private currentUserSubject: BehaviorSubject<USER>;
  constructor(private activateRoute: ActivatedRoute, private route: Router) {
    //this.route.getCurrentNavigation().extras.state;
    this.currentUserSubject = new BehaviorSubject<USER>(JSON.parse(localStorage.getItem('currentUser')));
  }

  ngOnInit() {
    /*this.user$ = this.activateRoute.paramMap
      .pipe(map(() => window.history.state));
      if(this.user$ != null && this.user$ != undefined){
        this.user$.subscribe(data => {
          if(data.login != null && data.login != undefined){
            this.user = new USER().deserialize(data);
          }
          console.log('=============' + data);
        });
      }*/this.user = this.currentUserValue();
      console.log('======mmmmmmmmmmmmm=======' + this.user.firstname);
  }
  public  currentUserValue(): USER {
    return this.currentUserSubject.value;
}
}
