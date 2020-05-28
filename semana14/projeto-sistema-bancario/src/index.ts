
import { getAllAccounts } from './getAllAccounts'
import { createAccount } from './createAccount'
import { checkBalance } from './checkBalance'
import { addCredit } from './addCredit'
import { transferToAccount } from './transferToAccount'
import { paymentDebit } from './paymentDebit'


const actionType : string = process.argv[2];


switch (actionType) {
    case "GET_ALL_ACCOUNTS":
        getAllAccounts();
        break;
    case "CREATE_ACCOUNT":
        createAccount(process.argv[3], process.argv[4], process.argv[5]);
        break;
    case "CHECK_BALANCE":
        checkBalance(process.argv[3], process.argv[4]);
        break;
    case "ADD_CREDIT":
        addCredit( process.argv[3], Number(process.argv[4]) );
        break;
    case "TRANSFER_TO_ACCOUNT":
        transferToAccount( process.argv[3], process.argv[4], process.argv[5], process.argv[6], Number(process.argv[7]) );
        break;
    case "DEBIT":
        paymentDebit(process.argv[3], process.argv[4], process.argv[5], Number(process.argv[6]) );
        break;
    default:
        console.log('Ação não encontrada!')
}
