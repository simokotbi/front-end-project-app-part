import { Component, OnInit, ViewChild } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Role } from '../../role/role';
@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  editField: string;
  public profiles: Profile[];
  public profile: Profile;
  public idTemp: number;
  public roles: Role[];
  formdataProfile;
  formdataRole;
  constructor(private profileService : ProfileService) { }

  ngOnInit() {
    this.profileService.getAllProfiles().subscribe(profiles => this.profiles = profiles);
    this.formdataProfile = new FormGroup({
      code: new FormControl('jskdksdjsk', Validators.compose([
         Validators.required
      ])),
      description: new FormControl(" hjsdhsjdh", Validators.compose([
        Validators.required
     ])),
     creationDate: new FormControl(new Date(), Validators.compose([
        Validators.required,
     ])),
      state: new FormControl("ko", Validators.compose([
        Validators.required,
     ]))
   });
   this.formdataRole = new FormGroup({
      code: new FormControl("kotkot", Validators.compose([
        Validators.required
      ])),
      description: new FormControl("dsdsdsdsds", Validators.compose([
        Validators.required
    ])),
    creationDate: new FormControl(new Date(), Validators.compose([
        Validators.required,
    ])),
      state: new FormControl("A", Validators.compose([
        Validators.required,
    ]))
  });
  }

  changeValue(id: number, property: string, event: any) {
    
    this.editField = event.target.textContent;
    this.profile = this.profiles[id];
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.profile = this.profiles[id];
    this.profiles[id][property] = editField;
    this.idTemp = id;
    alert(this.idTemp+ '   ' + this.profile.description);
  }

  updateProfile(id: number) {
    
    this.profile = this.profiles[id];
    this.roles = this.profile.roles;
  }

  public createNewProfile(data){
    this.profileService.createNewProfile(data).subscribe(profile => {
      this.profile = profile;
      this.profiles.push(this.profile);
      console.log(profile);
    },
    err=>{
      console.log(err);
    });
  }

}
