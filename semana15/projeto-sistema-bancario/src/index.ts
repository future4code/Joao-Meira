
import { getAllAccounts } from './getAllAccounts'
import { createAccount } from './createAccount'
import { checkBalance } from './checkBalance'
import { addCredit } from './addCredit'
import { transferToAccount } from './transferToAccount'
import { payBill } from './payBill'
import { updateBalance } from './updateBalance'
const moment = require('moment')


const actionType : string = process.argv[2];
console.log(actionType)

    switch (actionType) {
        case 'GET_ALL_ACCOUNTS':
                getAllAccounts();
            break;
            
        case 'CREATE_ACCOUNT':
                createAccount( 
                    process.argv[3], 
                    process.argv[4], 
                    moment(process.argv[5], 'DD/MM/YYYY')
                    )
            break;
            
        case 'CHECK_BALANCE':
                checkBalance(
                    process.argv[3], 
                    process.argv[4]
                    )
            break; 
            
        case 'ADD_CREDIT':
                addCredit( 
                    process.argv[3], 
                    Number(process.argv[4])
                    ) 
            break;
            
        case 'TRANSFER_TO_ACCOUNT':
                transferToAccount( 
                    process.argv[3], 
                    process.argv[4], 
                    process.argv[5], 
                    process.argv[6], 
                    Number(process.argv[7])
                )
            break;
                
        case 'PAYMENT':
                payBill(
                    process.argv[3], 
                    process.argv[4],
                    Number(process.argv[5]), 
                    moment(process.argv[6], 'DD/MM/YYYY')
                    ) 
            break;
            
        case 'UPDATE_BALANCE':
                updateBalance() 
            break;
            
        default:
                console.log('Ação não encontrada!')
            break;
            
    }  