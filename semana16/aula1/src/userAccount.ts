import { BankTransaction } from "./bankTransaction";
import  moment from 'moment'


export class UserAccount {
    public name: string;
    public birthDay: string;
    public cpf: string;
    private balance: number;
    public transactions: BankTransaction[]

    constructor(
        name : string, 
        birthDay : string, 
        cpf : string, 
        ) {
            this.name = name;
            this.birthDay = birthDay;
            this.cpf = cpf;
            this.balance = 0;
            this.transactions = []
        } 

    getBalance (): number {
        return  this.balance
    }

    addBalance(
        value : number,
        ) : void {

        const credit : BankTransaction = new BankTransaction( 
            value, 
            `Você depositou o valor de R$${value.toFixed(2)}`,
            moment().format("DD/MM/YYYY"),
            )

        this.balance = this.balance + value
        this.transactions.push(credit)
    }
}

