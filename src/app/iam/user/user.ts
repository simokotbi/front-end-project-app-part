import { UserProfile } from './UserProfile';
import { Profile } from '../profile/profile';
import { Role } from '../role/role';
import { UserAccountStatus } from './UserAccountStatus';


export class USER {
    public id: number;
    public login: string;
    public firstname: string;
    public lastname: string;
    public fullname: string ;
    public password: string;
    public password2: string;
    public phoneNumber: number;
    public mailAdress: string;
    public creationDate: Date;
    public activationDate: Date;
    public state: UserAccountStatus;
    public jobTitle: string;
    public userProfiles: UserProfile[];
    public profiles: Profile[];
    public roles: Role[];

    getFullName(): string {
        return this.firstname + ' ' + this.lastname;
      }

      getStatusLabel():string{
        alert(UserAccountStatus[this.state]);
        return UserAccountStatus[this.state];
      }
    deserialize(input: any): this {
       Object.assign(this, input);
       this.fullname = this.firstname + ' ' + this.lastname;
       this.state = UserAccountStatus[this.state];
       this.userProfiles = input.userProfiles.map(userProfile => new UserProfile().deserialize(userProfile));
       return this;
     }
}
