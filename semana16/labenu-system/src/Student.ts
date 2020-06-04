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
        let age = 0
        return age
    }
    getId () : number {
        let id = 0
        return id
    }
}