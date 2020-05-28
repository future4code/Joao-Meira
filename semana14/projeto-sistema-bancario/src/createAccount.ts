import { account } from './types';
import * as fs from 'fs';
import moment = require('moment')

const accountsList : account[] = require("../accounts.json")


export function createAccount (
    userName : string, cpf : string, birthDay : string
    ) {
    
    const cpfVerification = accountsList.find( account => {
        return account.cpf === cpf
    })


    const ageVerification = moment().diff(birthDay, 'years')
    console.log(ageVerification)

    if (cpfVerification) {
        console.log("Este CPF já possuí uma conta cadastrada.")

    } else {
        if(ageVerification < 18) {
            console.log('Contas só podem ser abertas por maiores de 18 anos.')
        } else if ( ageVerification >= 18 ) {
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
    }}
}

const nameToCreate : string = process.argv[2];
const cpfToCreate : string = process.argv[3];
const birthDayToCreate : string = process.argv[4]

createAccount(nameToCreate, cpfToCreate, birthDayToCreate)