"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const moment = require("moment");
const accountsList = require("../accounts.json");
function updateBalance() {
    const newAccountsList = accountsList.map((account) => {
        account.bankStatement.map(operation => {
            if (operation.date < moment('L')) {
                account.balance = 0;
                return (account.balance += operation.value,
                    account);
            }
            else {
                return operation;
            }
        });
        return account;
    });
    try {
        newAccountsList.map(account => {
            console.log(`Titular da Conta: ${account.userName}
                    CPF: ${account.cpf}
                    Data de Nascimento: ${account.birthDay}
                    Saldo: ${account.balance.toFixed(2)}
                    ` +
                'Extrato da conta:\n', account.bankStatement, '\n');
            console.log();
        });
        fs.writeFileSync('accounts.json', JSON.stringify(newAccountsList));
    }
    catch (error) {
        console.error(error);
    }
}
updateBalance();
//# sourceMappingURL=updateBalance.js.map