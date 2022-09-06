import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { USER } from '../user';
import { UserProfile } from '../UserProfile';
import { Profile } from '../../profile/profile';



@Component({
  selector: 'app-user',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  user: USER;
  userProfiles: UserProfile[];
  profiles: Profile[];

  private currentUserSubject: BehaviorSubject<USER>;
  displayedColumns:string[]=['Nom','Adresse mail','Actions'];
  constructor() {
    
    this.currentUserSubject = new BehaviorSubject<USER>(JSON.parse(localStorage.getItem('currentUser')));
   }

  ngOnInit() {
    this.user = this.currentUserValue();
    this.userProfiles = this.user.userProfiles.map(userProfile => new UserProfile().deserialize(userProfile));
    this.profiles = this.userProfiles.map(profile => new UserProfile().deserialize(profile).profile);
    
  }

  public  currentUserValue(): USER {
    return this.currentUserSubject.value;
  }
 
  
  dataSource=this.profiles;
}
