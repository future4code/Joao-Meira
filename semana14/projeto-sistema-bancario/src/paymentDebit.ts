import * as fs from 'fs';
import { account, bankTransaction } from './types';

const accountsList : account[] = require("../accounts.json")

let verifyDebit : number = 0;

function paymentDebit ( 
    cpfToDebit : string, 
    paymentDescription : string, 
    dateOfPayment : string,
    debitValue: number
    ) {
    
    const debit : bankTransaction = {
        value: debitValue,
        date: dateOfPayment,
        description: paymentDescription
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
            console.log(`O pagamento no valor de ${debitValue} foi efetuado com sucesso!`)
        } else {
            console.log(`O pagamento não foi processado`)
        }
    } catch(error) {
        console.error(error)
    }
}

const cpfToDebit : string = process.argv[2];
const paymentDescription : string = process.argv[3];
const dateOfPayment : string = process.argv[4];
const debitValue : number = Number(process.argv[5])

paymentDebit(  cpfToDebit, paymentDescription, dateOfPayment, debitValue )