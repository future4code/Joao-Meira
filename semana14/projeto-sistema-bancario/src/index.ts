import { account } from './types';

const accountsList : account[] = require("../accounts.json")

function verifyBalance ( 
    userName: string,
    userCpf : string 
    ) {

    try{
        accountsList.map(( account ) => {
            if (account.userName === userName && account.cpf === userCpf) {
                return (
                    console.log(`O seu saldo é de R$ ${account.balance.toFixed(2)}`)
               )
            } else {
                return account
            }
        })
    } catch(error) {
        console.error(error)
    }
}

const userName : string = process.argv[2];
const userCpf : string = process.argv[3];


verifyBalance(  userName, userCpf )