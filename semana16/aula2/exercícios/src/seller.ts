class Seller extends EmployeeExercise {
    private salesQuantity : number = 0;
    static SALES_COMISSION : number = 5;

    setSalesQuantity(quantity : number) {
        return this.salesQuantity += quantity
    }

    calculateTotalSalary() {
        return (this.baseSalary + Seller.BENEFITS_VALUE + (this.salesQuantity * Seller.SALES_COMISSION))
    }
}