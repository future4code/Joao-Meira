"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
class Teacher {
    constructor(name, email, birthDay, specialization) {
        this.name = name;
        this.email = email;
        this.birthDay = birthDay;
        this.specialization = specialization;
        this.id = Date.now();
        this.name = name;
        this.email = email;
        this.birthDay = birthDay;
        this.specialization = specialization;
    }
    getId() {
        return this.id;
    }
}
exports.Teacher = Teacher;
//# sourceMappingURL=Teacher.js.map