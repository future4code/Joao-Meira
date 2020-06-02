class User {
    constructor(id, email, name, password) {
        console.log("Chamando o construtor da classe User");
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
class Customer extends User {
    constructor(id, email, name, password, creditCard) {
        super(id, email, name, password);
        this.purchaseTotal = 2000;
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }
    getCreditCard() {
        return this.creditCard;
    }
}
let Employee = (() => {
    class Employee extends User {
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
let Seller = (() => {
    class Seller extends Employee {
        constructor() {
            super(...arguments);
            this.salesQuantity = 0;
        }
        setSalesQuantity(quantity) {
            return this.salesQuantity += quantity;
        }
        calculateTotalSalary() {
            return (this.baseSalary + Seller.BENEFITS_VALUE + (this.salesQuantity * Seller.SALES_COMISSION));
        }
    }
    Seller.SALES_COMISSION = 5;
    return Seller;
})();
const user4 = new Seller(`${Date.now()}`, 'teste3@gmail.com', 'Sauron', '123456', "21/12/1400", 3000);
console.log(user4.getId());
console.log(user4.calculateTotalSalary());
console.log(user4.getEmail());
console.log(user4.getName());
console.log(user4.getAdmissionDate());
console.log(user4.getBaseSalary());
console.log(user4.setSalesQuantity(100));
console.log(user4.calculateTotalSalary());
//# sourceMappingURL=index.js.map