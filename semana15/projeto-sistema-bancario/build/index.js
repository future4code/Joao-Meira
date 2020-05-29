"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAllAccounts_1 = require("./getAllAccounts");
const createAccount_1 = require("./createAccount");
const checkBalance_1 = require("./checkBalance");
const addCredit_1 = require("./addCredit");
const transferToAccount_1 = require("./transferToAccount");
const payBill_1 = require("./payBill");
const updateBalance_1 = require("./updateBalance");
const moment = require('moment');
const actionType = process.argv[2];
console.log(actionType);
switch (actionType) {
    case 'GET_ALL_ACCOUNTS':
        getAllAccounts_1.getAllAccounts();
        break;
    case 'CREATE_ACCOUNT':
        createAccount_1.createAccount(process.argv[3], process.argv[4], moment(process.argv[5], 'DD/MM/YYYY'));
        break;
    case 'CHECK_BALANCE':
        checkBalance_1.checkBalance(process.argv[3], process.argv[4]);
        break;
    case 'ADD_CREDIT':
        addCredit_1.addCredit(process.argv[3], Number(process.argv[4]));
        break;
    case 'TRANSFER_TO_ACCOUNT':
        transferToAccount_1.transferToAccount(process.argv[3], process.argv[4], process.argv[5], process.argv[6], Number(process.argv[7]));
        break;
    case 'PAYMENT':
        payBill_1.payBill(process.argv[3], process.argv[4], Number(process.argv[5]), moment(process.argv[6], 'DD/MM/YYYY'));
        break;
    case 'UPDATE_BALANCE':
        updateBalance_1.updateBalance();
        break;
    default:
        console.log('Ação não encontrada!');
        break;
}
//# sourceMappingURL=index.js.map