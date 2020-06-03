"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const user_1 = require("./user");
let Employee = (() => {
    class Employee extends user_1.User {
        constructor(id, email, name, password, admissionDate, baseSalary) {
            super(id, email, name, password);
            console.log("Chamando o construtor da classe Employee");
            this.admissionDate = admissionDate;
            this.baseSalary = baseSalary;
        }
        getAdmissionDate() {
            return this.admissionDate;
        }
        getBaseSalary() {
            return this.baseSalary;
        }
        calculateTotalSalary() {
            return (this.baseSalary + Employee.BENEFITS_VALUE);
        }
    }
    Employee.BENEFITS_VALUE = 400;
    return Employee;
})();
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map