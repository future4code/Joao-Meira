import { bankTransaction, account} from './types';
import * as fs from 'fs';

export const withdraw1: bankTransaction = {
    value: 100,
    date: '10-5-2020',
    description: "compra jogo The Witcher 3"
}
export const withdraw2: bankTransaction = {
    value: 50,
    date: '11-5-2020',
    description: "compra acordoamento violão"
}
export const withdraw3: bankTransaction = {
    value: 100,
    date: '10-5-2020',
    description: "compra posto caçula"
}

export const accountJoao: account = {
    userName: "João Meira",
    cpf: 10001021000,
    birthDay: '21-10-1987',
    balance: 1000,
    bankStatement: [withdraw1, withdraw2, withdraw3]
}

function createAccount (
    userName : string, cpf : number, birthDay : string
    ) {
    try{
        const newAccount : account = {
        userName: userName,
        cpf: cpf,
        birthDay: birthDay,
        balance: 0,
        bankStatement: [],
        }
        const util = require('util')
        const newAccountString : string = `\n${util.inspect(newAccount)},`
        fs.appendFileSync('accounts.json', newAccountString, 'utf8')
        return console.log("Conta criada com sucesso!")
        } catch (error){
        console.error(error)
    }
}


createAccount("zé", 82041103900, "21-10-1987")