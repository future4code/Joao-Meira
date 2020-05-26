import * as fs from 'fs';
import { account, bankTransaction } from './types';
import moment = require('moment')

const accountsList : account[] = require("../accounts.json")


function addCredit ( cpf : string, value : number ) {

    const credit : bankTransaction = {
        value: value,
        date: Date.now,
        description: `Depósito em dinheiro de R$${value.toFixed(2)}`
    }
    console.log(credit)
    let verifyInfo = 0;

    try{
        const newAccountsList = accountsList.map( account => {
            if (account.cpf === cpf) {
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
        console.log(`Depósito de R$${value.toFixed(2)} efetuado com sucesso!`)
        } else { 
            console.log('\u001b[31m' + `Deposito NÃO efetuado. Confira as informações.`)
         };
    } catch(error) {
        console.error(error)
    }
}

const accountToAddCredit : string = process.argv[2];
const valueOfCredit : number = Number(process.argv[3]);

addCredit( accountToAddCredit , valueOfCredit )