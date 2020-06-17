import * as fs from 'fs';
import { account, bankTransaction } from './types';
import moment = require('moment')

const accountsList : account[] = require("../accounts.json")


export function addCredit ( cpf : string, value : number ) {

    const credit : bankTransaction = {
        value: value,
        date: moment().format("DD/MM/YYYY"),
        description: `Depósito em dinheiro de R$${value.toFixed(2)}`
    }

    let verifyInfo = 0;

    try{
        console.log(credit)
        const newAccountsList = accountsList.map( account => {
            if (account.cpf === cpf && value) {
                verifyInfo = 1
            return (
                account.balance += value,
                account.bankStatement.push(credit), 
                account
                )
            } else { return account }
        });
        if(verifyInfo){
        fs.writeFileSync('accounts.json', JSON.stringify(newAccountsList))
        console.log("\x1b[32m", `Depósito de R$${value.toFixed(2)} efetuado com sucesso!`)
        } else { 
            console.log("\x1b[31m", `Deposito NÃO efetuado. Confira as informações.`)
         };
    } catch(error) {
        console.error(error)
    }
}