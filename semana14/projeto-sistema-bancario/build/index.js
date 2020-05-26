"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAllAccounts_1 = require("./getAllAccounts");
const createAccount_1 = require("./createAccount");
const checkBalance_1 = require("./checkBalance");
const addCredit_1 = require("./addCredit");
const transferToAccount_1 = require("./transferToAccount");
const paymentDebit_1 = require("./paymentDebit");
const actionChoice = process.argv[2];
const firstArgument = process.argv[3];
const secondArgument = process.argv[4];
const thirdArgument = process.argv[5];
const fourthArgument = process.argv[6];
const fifthArgument = process.argv[7];
switch (actionChoice) {
    case "GET_ALL_ACCOUNTS":
        getAllAccounts_1.getAllAccounts();
        break;
    case "CREATE_ACCOUNT":
        createAccount_1.createAccount(firstArgument, secondArgument, thirdArgument);
        break;
    case "CHECK_BALANCE":
        checkBalance_1.checkBalance(firstArgument, secondArgument);
        break;
    case "ADD_CREDIT":
        addCredit_1.addCredit(firstArgument, secondArgument);
        break;
    case "TRANSFER_TO_ACCOUNT":
        transferToAccount_1.transferToAccount(firstArgument, secondArgument, thirdArgument, fourthArgument, fifthArgument);
        break;
    case "DEBIT":
        paymentDebit_1.paymentDebit(firstArgument, secondArgument, thirdArgument, fourthArgument);
        break;
    default:
        console.log('Ação não encontrada!');
        break;
}
//# sourceMappingURL=index.js.map