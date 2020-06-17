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
exports.addCredit = void 0;
const fs = __importStar(require("fs"));
const moment = require("moment");
const accountsList = require("../accounts.json");
function addCredit(cpf, value) {
    const credit = {
        value: value,
        date: moment().format("DD/MM/YYYY"),
        description: `Depósito em dinheiro de R$${value.toFixed(2)}`
    };
    let verifyInfo = 0;
    try {
        console.log(credit);
        const newAccountsList = accountsList.map(account => {
            if (account.cpf === cpf && value) {
                verifyInfo = 1;
                return (account.balance += value,
                    account.bankStatement.push(credit),
                    account);
            }
            else {
                return account;
            }
        });
        if (verifyInfo) {
            fs.writeFileSync('accounts.json', JSON.stringify(newAccountsList));
            console.log("\x1b[32m", `Depósito de R$${value.toFixed(2)} efetuado com sucesso!`);
        }
        else {
            console.log("\x1b[31m", `Deposito NÃO efetuado. Confira as informações.`);
        }
        ;
    }
    catch (error) {
        console.error(error);
    }
}
exports.addCredit = addCredit;
//# sourceMappingURL=addCredit.js.map