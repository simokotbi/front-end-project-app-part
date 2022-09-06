import { Profile } from '../profile/profile';

export class UserProfile {
    public state: string;
    public additionDate: Date;
    public profile: Profile;

    deserialize(input: any): this {
       Object.assign(this, input);
       this.profile = new Profile().deserialize(input.profile);
       this.profile.additionDate = this.additionDate;
       this.profile.assignmentState = this.state;
       return this;
     }

     
}
