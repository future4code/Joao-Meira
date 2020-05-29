import { account } from './types';
import * as fs from 'fs';
import moment from 'moment'

const accountsList : account[] = require("../accounts.json")

export function createAccount (
    userName : string, 
    cpf : string, 
    birthDay : string
    ) {
    
    const cpfVerification = accountsList.find( account => {
        return account.cpf === cpf
    })
    const ageVerification = moment().diff(birthDay, 'years')
    console.log(ageVerification)
    console.log(ageVerification)

    if (cpfVerification) {
        console.log("\x1b[31m", "Este CPF já possuí uma conta cadastrada.")
    } else {
        if(ageVerification < 18) {
            console.log("\x1b[31m", 'Contas só podem ser abertas por maiores de 18 anos.')
        } else if ( ageVerification >= 18 && cpf && birthDay ) {
        try{
            const newAccount : account = {
            userName,
            cpf,
            birthDay: moment(birthDay).format('DD/MM/YYYY'),
            balance: 0,
            bankStatement: [],
            }
            accountsList.push(newAccount)
            const newAccountsList = JSON.stringify(accountsList)
            fs.writeFileSync('accounts.json', newAccountsList, 'utf8')
            return console.log("\x1b[32m", "Conta criada com sucesso!")
            } catch (error){
            console.error(error)
        }
    } else {
        console.log("\x1b[31m", "Está faltando alguma informação!")
    }}
}
