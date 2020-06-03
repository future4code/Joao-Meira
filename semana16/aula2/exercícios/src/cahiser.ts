import { Employee } from "./employee";

export class Cashier extends Employee {
    private bill : string[] = [];


    calculateBill(bill : string[]) {
        let total : number;
        bill.map( order => total += order.value)

    }

}