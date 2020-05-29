import * as fs from 'fs';
import { account, bankTransaction } from './types';
import moment = require('moment')

const accountsList : account[] = require("../accounts.json")

let verifyCredit = 0;

let verifyUserInfo : number = 0;

let verifyReceiver : number = 0;

export function transferToAccount ( 
    userNameTransfering : string, 
    cpfTransfering : string, 
    userNameReceiving : string, 
    cpfReceiving : string,
    valueTransfered: number
    ) {

        const transferCredit : bankTransaction = {
            value: valueTransfered,
            date: moment().format("DD/MM/YYYY"),
            description: `Transferência bancária de ${userNameTransfering}`
        }
    
        const transferDebit : bankTransaction = {
            value: (valueTransfered) * -1,
            date: moment().format("DD/MM/YYYY"),
            description: `Transferência bancária para ${userNameReceiving}`
        }
    

    accountsList.map(account => {
            if( account.cpf === cpfTransfering, account.balance >= valueTransfered) {
                return verifyCredit=valueTransfered
            }
        })

    try{
        const newAccountsList = accountsList.map(( account ) => {
            if (
                account.balance >= valueTransfered &&
                account.cpf === cpfTransfering &&
                account.userName === userNameTransfering
                ) {
                return (
                    verifyUserInfo = 1,
                    account.balance -= valueTransfered,
                    account.bankStatement.push(transferDebit),
                    account
               )
            } else if ( 
                verifyCredit === valueTransfered &&
                account.cpf === cpfReceiving && 
                account.userName === userNameReceiving 
                ) {
                return (
                    verifyReceiver = 1,
                    account.balance += valueTransfered,
                    account.bankStatement.push(transferCredit),
                    account
                )
            } else {
                return account
            }
        })

        if(
            verifyCredit === valueTransfered &&
            verifyUserInfo === 1 &&
            verifyReceiver === 1
            ){
            fs.writeFileSync('accounts.json', JSON.stringify(newAccountsList))
            console.log(
                "\x1b[32m", 
                `Transferência de ${valueTransfered} para ${userNameReceiving} efetuada com sucesso!`
                )
        } else if (
            verifyCredit === valueTransfered && 
            verifyUserInfo === 1 && 
            verifyReceiver === 0
            ) {
            console.log(
                "\x1b[31m",
                `Informações do Depositário incorretas.`
                )
        } else if (
            verifyCredit !== valueTransfered && 
            verifyUserInfo === 0
            ) {
            console.log(
                "\x1b[31m",
                `Saldo insuficiente para transferência ou Informações do depositante incorretas.`
                )
        } else if (
            verifyCredit === valueTransfered && 
            verifyUserInfo === 0 && 
            verifyReceiver === 1
            ) {
            console.log(
                "\x1b[31m",
                `Informações do depositante incorretas.`
                )
        } else {
            console.log("\x1b[31m", `A transferência não pôde ser processada.`)
        }
    } catch(error) {
        console.error(error)
    }
}