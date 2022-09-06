export class Role {

    public id: number;
    public code: string;
    public description: string;
    public creationDate: Date;
    public activationDate: Date;
    public state: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
      }
}
