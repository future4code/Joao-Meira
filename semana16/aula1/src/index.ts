import { JSONFileManager } from "./fileManager";
import { Bank } from "./bank";
import { UserAccount } from "./userAccount";
const moment = require('moment')

const fileManager = new JSONFileManager('accounts.json')

const accounts = fileManager.getAccountsFromFile() as UserAccount[]

const meuBanco = new Bank(accounts, fileManager)


const actionType : string = process.argv[2];
console.log(actionType)

    switch (actionType) {
        case 'GET_ALL_ACCOUNTS':
                meuBanco.getAllAccounts();
            break;
            
        case 'CREATE_ACCOUNT':
                meuBanco.createAccount( 
                    process.argv[3], 
                    process.argv[4], 
                    moment(process.argv[5], 'DD/MM/YYYY')
                    )
            break;
            
        case 'GET_BALANCE':
                meuBanco.accounts.map(account => {
                    if (account.cpf === process.argv[3]){
                        const thisAccount = new UserAccount(
                            account.name,
                            account.cpf,
                            account.birthDay
                            )
                        console.log(thisAccount.getBalance())
                    }
                })
            break; 
            
        case 'ADD_BALANCE':
            const accountsList : UserAccount[] = meuBanco.accounts.map(account => {
                if (account.cpf === process.argv[3]){
                    const thisAccount = new UserAccount(
                        account.name,
                        account.cpf,
                        account.birthDay
                        )
                    thisAccount.addBalance(Number(process.argv[4]))
                    console.log(account)
                    return thisAccount
                    } else return account
            })
            fileManager.writeAccountToFile(accountsList)            
            break;
            
        // case 'TRANSFER_TO_ACCOUNT':
        //         transferToAccount( 
        //             process.argv[3], 
        //             process.argv[4], 
        //             process.argv[5], 
        //             process.argv[6], 
        //             Number(process.argv[7])
        //         )
        //     break;
                
        // case 'PAYMENT':
        //         payBill(
        //             process.argv[3], 
        //             process.argv[4],
        //             Number(process.argv[5]), 
        //             moment(process.argv[6], 'DD/MM/YYYY')
        //             ) 
        //     break;
            
        // case 'UPDATE_BALANCE':
        //         updateBalance() 
        //     break;
            
        default:
                console.log('Ação não encontrada!')
            break;
            
    }  