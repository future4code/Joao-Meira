
import { getAllAccounts } from './getAllAccounts'
import { createAccount } from './createAccount'
import { checkBalance } from './checkBalance'
import { addCredit } from './addCredit'
import { transferToAccount } from './transferToAccount'
import { paymentDebit } from './paymentDebit'

const selectedAction = (
    actionType : string, 
    argument1? : string, 
    argument2? : any, 
    argument3? : string, 
    argument4? : any, 
    argument5? : any, 
    ) => {
    switch (actionType) {
        case "GET_ALL_ACCOUNTS":
            getAllAccounts();
            break;
        case "CREATE_ACCOUNT":
            createAccount(argument1, argument2, argument3);
            break;
        case "CHECK_BALANCE":
            checkBalance(argument1, argument2);
            break;
        case "ADD_CREDIT":
            addCredit(argument1, argument2);
            break;
        case "TRANSFER_TO_ACCOUNT":
            transferToAccount(argument1, argument2, argument3, argument4, argument5);
            break;
        case "DEBIT":
            paymentDebit(argument1, argument2, argument3, argument4);
            break;
        default:
            console.log('Ação não encontrada!')
    }
}

const actionChoice : string = process.argv[2];
const firstArgument = process.argv[3];
const secondArgument = process.argv[4];
const thirdArgument = process.argv[5];
const fourthArgument = process.argv[6];
const fifthArgument = process.argv[7];

selectedAction(
    actionChoice, 
    firstArgument, 
    secondArgument, 
    thirdArgument, 
    fourthArgument,
    fifthArgument
    )