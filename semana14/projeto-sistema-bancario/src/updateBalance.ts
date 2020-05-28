import * as fs from 'fs';
import { account } from './types';
import moment = require('moment')

const accountsList : account[] = require("../accounts.json")

function updateBalance() {

        const newAccountsList = accountsList.map(( account ) => {
            account.bankStatement.map( operation => {
                if(operation.date < moment('L')){
                    account.balance = 0
                    return (
                    account.balance += operation.value,
                    account
                    )
                } else {
                    return operation
                }
            })
            return account
        })
        try{
            newAccountsList.map( account => {
                console.log(
                    `Titular da Conta: ${account.userName}
                    CPF: ${account.cpf}
                    Data de Nascimento: ${account.birthDay}
                    Saldo: ${account.balance.toFixed(2)}
                    ` +
                    'Extrato da conta:\n', account.bankStatement, '\n');
                console.log()
            })
                fs.writeFileSync('accounts.json', JSON.stringify(newAccountsList))
        } catch(error) {
            console.error(error)
        }
    }
   

updateBalance()