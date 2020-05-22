import * as fs from 'fs';
import { account } from './types';

const accountsList : account[] = require("../accounts.json")

function addCredit ( cpf : string, value : number ) {
    const newAccountsList = accountsList.map(( account ) => {
        if (account.cpf === cpf) {
           return account.balance = value, account

        } else { return account }
    })
    try{
        fs.writeFileSync('accounts.json', JSON.stringify(newAccountsList))
        console.log(`Depósito de ${value} efetuado com sucesso!`)
    } catch(error) {
        console.error(error)
    }
}

const accountToAddCredit : string = process.argv[2];
const valueOfCredit : number = Number(process.argv[3]);

addCredit( accountToAddCredit , valueOfCredit )