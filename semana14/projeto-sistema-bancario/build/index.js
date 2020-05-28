"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAllAccounts_1 = require("./getAllAccounts");
const createAccount_1 = require("./createAccount");
const checkBalance_1 = require("./checkBalance");
const actionType = process.argv[2];
const firstArgument = process.argv[3];
const secondArgument = process.argv[4];
const thirdArgument = process.argv[5];
const fourthArgument = process.argv[6];
const fifthArgument = process.argv[7];
switch (actionType) {
    case "GET_ALL_ACCOUNTS":
        getAllAccounts_1.getAllAccounts();
        break;
    case "CREATE_ACCOUNT":
        createAccount_1.createAccount(firstArgument, secondArgument, thirdArgument);
        break;
    case "CHECK_BALANCE":
        checkBalance_1.checkBalance(firstArgument, secondArgument);
        break;
    default:
        console.log('Ação não encontrada!');
}
//# sourceMappingURL=index.js.map