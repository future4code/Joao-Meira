import * as fs from 'fs';
import { account, bankTransaction } from './types';

const accountsList : account[] = require("../accounts.json")

let verifyDebit : number = 0;

export function paymentDebit ( 
    cpfToDebit : string, 
    debitDescription : string, 
    debitDate : string,
    debitValue: number
    ) {
    
    const debit : bankTransaction = {
        value: (debitValue) * -1,
        date: debitDate,
        description: debitDescription
    }

    try{
        const newAccountsList = accountsList.map(( account ) => {
            if (account.balance >= debitValue && account.cpf === cpfToDebit) {
                verifyDebit = 1
                return (
                    account.balance -= debitValue,
                    account.bankStatement.push(debit),
                    account
               )
            } else {
                return account
            }
        })
        if(verifyDebit){
            fs.writeFileSync('accounts.json', JSON.stringify(newAccountsList))
            console.log(`Foi realizado o débito de R$${debitValue}.`)
        } else {
            console.log(`O débito não foi processado`)
        }
    } catch(error) {
        console.error(error)
    }
}

const cpfToDebit : string = process.argv[2];
const debitDescription : string = process.argv[3];
const debitDate : string = process.argv[4];
const debitValue : number = Number(process.argv[5])

paymentDebit(  cpfToDebit, debitDescription, debitDate, debitValue )