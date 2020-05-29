import * as fs from 'fs';
import { account } from './types';
import moment = require('moment')
import { getAllAccounts } from './getAllAccounts';

const accountsList : account[] = require("../accounts.json")

export function updateBalance() {

        const newAccountsList = accountsList.map(( account ) => {
            account.bankStatement.map( operation => {
                const operationDate : moment.Moment = moment(operation.date, "DD/MM/YYYY")
                const isToUpdate = moment().diff(operationDate)
                console.log(isToUpdate)
                account.balance = 0
                if( isToUpdate < 0 ){
                    return (
                    operation
                    )
                } else {
                    return (
                    account.balance += operation.value,
                    account
                    )
                }
            })
            return account
        })

        try{
            // newAccountsList.map( account => {
            //     console.log(
            //         `Titular da Conta: ${account.userName}
            //         CPF: ${account.cpf}
            //         Data de Nascimento: ${account.birthDay}
            //         Saldo: ${account.balance.toFixed(2)}
            //         ` +
            //         'Extrato da conta:\n', account.bankStatement, '\n');
            //     console.log()
            // })
            fs.writeFileSync('accounts.json', JSON.stringify(newAccountsList))
            getAllAccounts()
        } catch(error) {
            console.error(error)
        }
    }
   