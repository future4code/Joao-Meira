const moment = require('moment')
import { User } from "./User";

export class Student implements User{
    private id : number = Date.now()

    constructor(
        public name : string,
        public email : string,
        public birthDay : string,
        public hobbies : string,
    ){
        this.name = name;
        this.email = email;
        this.birthDay = birthDay;
        this.hobbies = hobbies;
    }

    getAge () : number {
        const age = moment(this.birthDay, 'DD/MM/YYYY')
        return moment().diff(age, 'years')
    }
    
    getId () : number {
        return this.id
    }
}