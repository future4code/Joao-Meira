  
  export class Employee {
    public name : string;
    protected baseSalary : number;
    static BENEFITS_VALUE : number = 400;
  
    constructor(
      name: string,
      baseSalary: number,
    ) {
      this.name = name,
      this.baseSalary = baseSalary;
    }
  

    public getBaseSalary(): number {
      return this.baseSalary;
    }
    public calculateTotalSalary() : number {
        return ( this.baseSalary + Employee.BENEFITS_VALUE )
    }
  }