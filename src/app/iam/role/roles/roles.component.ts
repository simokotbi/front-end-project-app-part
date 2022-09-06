import { Component, OnInit } from '@angular/core';
import { Profile } from '../../profile/profile';
import { Role } from '../role';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoleService } from '../role.service';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  editField: string;
  public idTemp: number;
  public roles: Role[];
  public role: Role;
  formdataRole;
  constructor(private roleService : RoleService) { }

  ngOnInit() {
    this.roleService.getAllRoles().subscribe(roles => this.roles = roles);
    
   this.formdataRole = new FormGroup({
      code: new FormControl("codcodcod", Validators.compose([
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
    this.role = this.roles[id];
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.role = this.roles[id];
    this.roles[id][property] = editField;
    this.idTemp = id;
    alert(this.idTemp+ '   ' + this.role.description);
  }

  updateProfile(id: number) {
    
    this.role = this.roles[id];
  }

  public createNewRole(data){
    this.roleService.createNewRole(data).subscribe(role => {
      this.role = role;
      this.roles.push(this.role);
      console.log(role);
    },
    err=>{
      console.log(err);
    });
  }
}
