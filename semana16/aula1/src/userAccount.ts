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
        cpf : string, 
        birthDay : string, 
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

        return (
            this.balance = this.balance + value,
            this.transactions.push(credit),
            console.log(this.balance, this.transactions),
            console.log("\x1b[32m", `Depósito de R$${value.toFixed(2)} efetuado com sucesso!`)
        )
    }
}

