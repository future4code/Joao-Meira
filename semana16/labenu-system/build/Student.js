"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const moment = require('moment');
class Student {
    constructor(name, email, birthDay, hobbies) {
        this.name = name;
        this.email = email;
        this.birthDay = birthDay;
        this.hobbies = hobbies;
        this.id = Date.now();
        this.name = name;
        this.email = email;
        this.birthDay = birthDay;
        this.hobbies = hobbies;
    }
    getAge() {
        const age = moment(this.birthDay, 'DD/MM/YYYY');
        return moment().diff(age, 'years');
    }
    getId() {
        return this.id;
    }
}
exports.Student = Student;
//# sourceMappingURL=Student.js.map