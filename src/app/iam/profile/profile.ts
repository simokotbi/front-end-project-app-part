import { Role } from '../role/role';
import{MaterialCComponent }from 'src/app/material-c/material-c.component';

export class Profile {

    public id: number;
    public code: string;
    public description: string;
    public creationDate: Date;
    public activationDate: Date;
    public state: string;
    public assignmentState: string;
    public additionDate: Date;
    public roles: Role[];

    deserialize(input: any): this {
        Object.assign(this, input);
        this.roles = input.roles.map(role => new Role().deserialize(role));
        return this;
      }
}
