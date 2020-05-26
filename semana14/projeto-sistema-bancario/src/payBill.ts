import * as fs from 'fs';
import { account, bankTransaction } from './types';
import moment = require('moment')

const accountsList : account[] = require("../accounts.json")

let verifyPayment : number = 0;

function payBill ( 
    cpfToPay : string, 
    paymentDescription : string, 
    paymentValue: number,
    dateOfPayment ? : string,
    ) {
    
    const payment : bankTransaction = {
        value: (paymentValue) * -1,
        date: dateOfPayment,
        description: paymentDescription
    }

    const scheduledPayment : bankTransaction = {
        value: (paymentValue) * -1,
        date: moment().format("L"),
        description: paymentDescription
    }

    if(dateOfPayment){
        const newAccountsList = accountsList.map(( account ) => {
            if (account.balance >= paymentValue && account.cpf === cpfToPay) {
                verifyPayment = 1
                return (
                    account.balance -= paymentValue,
                    account.bankStatement.push(payment),
                    account
               )
            } else {
                return account
            }
        })
        try{
            if(verifyPayment){
                fs.writeFileSync('accounts.json', JSON.stringify(newAccountsList))
                console.log(`O pagamento no valor de ${paymentValue} foi efetuado com sucesso!`)
            } else {
                console.log(`O pagamento não foi processado`)
            }
        } catch(error) {
            console.error(error)
        }
    } else {
        const newAccountsList = accountsList.map(( account ) => {
            if (account.balance >= paymentValue && account.cpf === cpfToPay) {
                verifyPayment = 1
                return (
                    account.balance -= paymentValue,
                    account.bankStatement.push(scheduledPayment),
                    account
               )
            } else {
                return account
            }
        })
        try{
            if(verifyPayment){
                fs.writeFileSync('accounts.json', JSON.stringify(newAccountsList))
                console.log(`O pagamento no valor de ${paymentValue} foi efetuado com sucesso!`)
            } else {
                console.log(`O pagamento não foi processado`)
            }
        } catch(error) {
            console.error(error)
        }
    }
}


const cpfToPay : string = process.argv[2];
const paymentDescription : string = process.argv[3];
const paymentValue : number = Number(process.argv[4]);
const dateOfPayment : string = process.argv[5];

payBill(  cpfToPay, paymentDescription, paymentValue, dateOfPayment )