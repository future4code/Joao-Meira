"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileManager_1 = require("./fileManager");
const bank_1 = require("./bank");
const userAccount_1 = require("./userAccount");
const moment = require('moment');
const fileManager = new fileManager_1.JSONFileManager('accounts.json');
const accounts = fileManager.getAccountsFromFile();
const meuBanco = new bank_1.Bank(accounts, fileManager);
const actionType = process.argv[2];
console.log(actionType);
switch (actionType) {
    case 'GET_ALL_ACCOUNTS':
        meuBanco.getAllAccounts();
        break;
    case 'CREATE_ACCOUNT':
        meuBanco.createAccount(process.argv[3], process.argv[4], moment(process.argv[5], 'DD/MM/YYYY'));
        break;
    case 'GET_BALANCE':
        meuBanco.accounts.map(account => {
            if (account.cpf === process.argv[3]) {
                const thisAccount = new userAccount_1.UserAccount(account.name, account.cpf, account.birthDay);
                console.log(thisAccount.getBalance());
            }
        });
        break;
    case 'ADD_BALANCE':
        const accountsList = meuBanco.accounts.map(account => {
            if (account.cpf === process.argv[3]) {
                const thisAccount = new userAccount_1.UserAccount(account.name, account.cpf, account.birthDay);
                thisAccount.addBalance(Number(process.argv[4]));
                console.log(account);
                return thisAccount;
            }
            else
                return account;
        });
        fileManager.writeAccountToFile(accountsList);
        break;
    default:
        console.log('Ação não encontrada!');
        break;
}
//# sourceMappingURL=index.js.map