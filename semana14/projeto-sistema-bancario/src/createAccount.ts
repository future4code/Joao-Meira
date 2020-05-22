import { account } from './types';
import * as fs from 'fs';

const accountsList : account[] = require("../accounts.json")

function createAccount (
    userName : string, cpf : string, birthDay : string
    ) {
    const cpfVerification = accountsList.find( account => {
        return account.cpf === cpf
    })
    if (cpfVerification) {
        console.log("Este CPF já possuí uma conta cadastrada.")
    } else {
        try{
            const newAccount : account = {
            userName: userName,
            cpf: cpf,
            birthDay: birthDay,
            balance: 0,
            bankStatement: [],
            }
            accountsList.push(newAccount)
            const newAccountsList = JSON.stringify(accountsList)
            fs.writeFileSync('accounts.json', newAccountsList, 'utf8')
            return console.log("Conta criada com sucesso!")
            } catch (error){
            console.error(error)
        }
    }

}

const nameToCreate : string = process.argv[2];
const cpfToCreate : string = process.argv[3];
const birthDayToCreate : string = process.argv[4]

createAccount(nameToCreate, cpfToCreate, birthDayToCreate)