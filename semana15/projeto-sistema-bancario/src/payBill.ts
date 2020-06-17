import * as fs from 'fs';
import { account, bankTransaction } from './types';
import moment = require('moment')

const accountsList : account[] = require("../accounts.json")

let verifyPayment : number = 0;

export function payBill ( 
    cpfToPay : string, 
    paymentDescription : string, 
    paymentValue: number,
    dateOfPayment ? : moment.Moment,
    ) {

    const dateNow : number = moment().diff(dateOfPayment, "days")
    
    const scheduledPayment : bankTransaction = {
        value: (paymentValue) * -1,
        date: moment(dateOfPayment).format('DD/MM/YYYY'),
        description: paymentDescription
    }

    const payment : bankTransaction = {
        value: (paymentValue) * -1,
        date: moment().format('DD/MM/YYYY'),
        description: paymentDescription
    }

    if ( 
        dateNow <= 0 &&
        cpfToPay && 
        paymentDescription && 
        paymentValue) {
        const newAccountsList = accountsList.map(( account ) => {
            if (account.balance >= paymentValue && account.cpf === cpfToPay) {
                verifyPayment = 1
                return (
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
                console.log("\x1b[32m", `O pagamento no valor de ${paymentValue} foi efetuado com sucesso!`)
            } else {
                console.log("\x1b[31m", `O pagamento NÃO foi processado. Confira as informações`)
            }
        } catch(error) {
            console.error(error)
        }
     } else if( 
        paymentDescription && 
        cpfToPay && 
        paymentValue
        ) {
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
                console.log("\x1b[32m", `O pagamento no valor de ${paymentValue} foi efetuado com sucesso!`)
            } else {
                console.log("\x1b[31m", `O pagamento NÃO foi processado. Confira as informações.`)
            }
        } catch(error) {
            console.error(error)
        }
    } else {
        console.log("\x1b[31m", `A data do pagamento é inválida ou alguma informação necessária não foi informada.`)
    }
}
