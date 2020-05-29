import { account } from './types';

const accountsList : account[] = require("../accounts.json")



export function checkBalance ( 
    userName: string,
    userCpf : string 
    ) {

    let infoVerify = 0;

    accountsList.filter( account => {
        if(account.userName === userName && account.cpf === userCpf)
        infoVerify = 1
    })

    try{
        if(infoVerify)
        {
        accountsList.map(( account ) => {
            if (account.userName === userName && account.cpf === userCpf) {
                return (
                    console.log(`O seu saldo é de R$ ${account.balance.toFixed(2)}`)
               )
            }
        })
    } else {
        console.log("\x1b[31m", 'Não existe nenhuma conta registrada com este Nome e CPF')
    }
    } catch(error) {
        console.error(error)
    }
}
