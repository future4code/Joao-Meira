import { User } from "./User";
import moment from 'moment'

export class Teacher implements User {
    private id : number = Date.now()
    
    constructor(
        public name : string,
        public email : string,
        public birthDay : string,
        public specialization : string,
    ){
        this.name = name;
        this.email = email;
        this.birthDay = birthDay;
        this.specialization = specialization;
    }

    public getId () : number {
        return this.id
    }
}