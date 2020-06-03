export class BankTransaction {
    value: number;
    date: string;
    description: string;

    constructor(
        value : number,
        description : string,
        date : string,
    ) {
        this.value = value;
        this.date = date;
        this.description = description;
    }
}