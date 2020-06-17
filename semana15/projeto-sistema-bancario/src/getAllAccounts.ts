import * as fs from 'fs';
import { account } from './types';

const accountsList : account[] = require("../accounts.json")

export function getAllAccounts () {
    try{
        accountsList.map( account => {
            console.log("\x1b[1m",`
            Titular da Conta: ${account.userName}
            CPF: ${account.cpf}
            Data de Nascimento: ${account.birthDay}
            Saldo: R$${account.balance.toFixed(2)}
            ` +
            'Extrato da conta:\n', account.bankStatement, '\n');
            console.log()
        })
    } catch(error) {
        console.error(error)
    }
}
