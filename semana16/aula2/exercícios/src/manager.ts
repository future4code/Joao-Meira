import { Employee } from "./employee";

export class Manager extends Employee {
    private salesQuantity : number = 0;
    static SALES_COMISSION : number = 5;

    setSalesQuantity(quantity : number) {
        return this.salesQuantity += quantity
    }

    calculateTotalSalary() {
        return (this.baseSalary + Manager.BENEFITS_VALUE + (this.salesQuantity * Manager.SALES_COMISSION))
    }
}