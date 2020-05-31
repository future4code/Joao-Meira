import * as fs from 'fs';
import { account } from './types';
import moment = require('moment')
import { getAllAccounts } from './getAllAccounts';

const accountsList : account[] = require("../accounts.json")

export function updateBalance() {

        const newAccountsList = accountsList.map(( account ) => {
            account.balance = 0
            account.bankStatement.map( operation => {
                const operationDate : moment.Moment = moment(operation.date, "DD/MM/YYYY")
                const isToUpdate = moment().diff(operationDate)
                console.log(isToUpdate)
                if( isToUpdate < 0 ){
                    return (
                    operation
                    )
                } else {
                    return (
                    account.balance += operation.value
                    )
                }
            })
            return account
        })

        try{
            fs.writeFileSync('accounts.json', JSON.stringify(newAccountsList))
            getAllAccounts()
        } catch(error) {
            console.error(error)
        }
    }