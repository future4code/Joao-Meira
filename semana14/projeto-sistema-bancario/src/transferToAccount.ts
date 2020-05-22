import * as fs from 'fs';
import { account } from './types';

const accountsList : account[] = require("../accounts.json")

let credit = 0;

let verifyUserInfo : number = 0;

let verifyReceiver : number = 0;

function transferValue ( 
    userNameTransfering : string, 
    cpfTransfering : string, 
    userNameReceiving : string, 
    cpfReceiving : string,
    valueTransfered: number
    ) {

    accountsList.map(account => {
            if( account.cpf === cpfTransfering, account.balance >= valueTransfered) {
                return credit=valueTransfered
            }
        })

    try{
        const newAccountsList = accountsList.map(( account ) => {
            if (account.balance >= valueTransfered && account.cpf === cpfTransfering && account.userName === userNameTransfering) {
                return (
                    verifyUserInfo = 1,
                    account.balance -= valueTransfered, 
                    account
               )
            } else if ( credit === valueTransfered && account.cpf === cpfReceiving && account.userName === userNameReceiving ) {
                    return (
                       verifyReceiver = 1,
                       account.balance += valueTransfered,
                       account
                   )
            } else {
                return account
            }
        })

        if(credit === valueTransfered && verifyUserInfo === 1 && verifyReceiver === 1){
            fs.writeFileSync('accounts.json', JSON.stringify(newAccountsList))
            console.log(`Transferência de ${valueTransfered} para ${userNameReceiving} efetuada com sucesso!`)
        } else if (credit === valueTransfered && verifyUserInfo === 1 && verifyReceiver === 0) {
            console.log(`Informações do Depositário incorretas.`)
        } else if (credit !== valueTransfered && verifyUserInfo === 0) {
            console.log(`Saldo insuficiente para transferência!`)
            console.log(`Informações do depositante incorretas.`)
        } else if (credit === valueTransfered && verifyUserInfo === 0 && verifyReceiver === 1) {
            console.log(`Informações do depositante incorretas.`)
        } else {
            console.log(`A transferência não pôde ser processada.`)
        }
    } catch(error) {
        console.error(error)
    }
}



const userTransfering : string = process.argv[2];
const cpfTransfering : string = process.argv[3];
const userReceiving : string = process.argv[4];
const cpfReceiving : string = process.argv[5];
const valueTransfered : number = Number(process.argv[6])

transferValue( userTransfering , cpfTransfering, userReceiving, cpfReceiving, valueTransfered )