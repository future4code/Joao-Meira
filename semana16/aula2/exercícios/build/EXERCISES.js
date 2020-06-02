class UserExercise {
    constructor(id, email, name, password) {
        console.log("Chamando o construtor da classe UserExercise");
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getName() {
        return this.name;
    }
    introduceSelf() {
        return `Olá! Eu sou o ${this.getName()}. Bom dia!`;
    }
}
class CustomerExercise extends UserExercise {
    constructor(id, email, name, password, creditCard) {
        super(id, email, name, password);
        this.purchaseTotal = 2000;
        console.log("Chamando o construtor da classe CustomerExercise");
        this.creditCard = creditCard;
    }
    getCreditCard() {
        return this.creditCard;
    }
}
let EmployeeExercise = (() => {
    class EmployeeExercise extends UserExercise {
        constructor(id, email, name, password, admissionDate, baseSalary) {
            super(id, email, name, password);
            console.log("Chamando o construtor da classe EmployeeExercise");
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
            return (this.baseSalary + EmployeeExercise.BENEFITS_VALUE);
        }
    }
    EmployeeExercise.BENEFITS_VALUE = 400;
    return EmployeeExercise;
})();
let SellerExercise = (() => {
    class SellerExercise extends EmployeeExercise {
        constructor() {
            super(...arguments);
            this.salesQuantity = 0;
        }
        setSalesQuantity(quantity) {
            return this.salesQuantity += quantity;
        }
        calculateTotalSalary() {
            return (this.baseSalary + SellerExercise.BENEFITS_VALUE + (this.salesQuantity * SellerExercise.SALES_COMISSION));
        }
    }
    SellerExercise.SALES_COMISSION = 5;
    return SellerExercise;
})();
const userExercise4 = new SellerExercise(`${Date.now()}`, 'teste3@gmail.com', 'Sauron', '123456', "21/12/1400", 3000);
console.log(userExercise4.getId());
console.log(userExercise4.calculateTotalSalary());
console.log(userExercise4.getEmail());
console.log(userExercise4.getName());
console.log(userExercise4.getAdmissionDate());
console.log(userExercise4.getBaseSalary());
console.log(userExercise4.setSalesQuantity(100));
console.log(userExercise4.calculateTotalSalary());
//# sourceMappingURL=EXERCISES.js.map