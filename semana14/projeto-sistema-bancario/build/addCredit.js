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
const accountsList = require("../accounts.json");
function addCredit(cpf, value) {
    const newAccountsList = accountsList.map((account) => {
        if (account.cpf === cpf) {
            return (account.balance = value,
                account);
        }
        else {
            return account;
        }
    });
    try {
        fs.writeFileSync('accounts.json', JSON.stringify(newAccountsList));
        console.log(`Depósito de ${value} efetuado com sucesso!`);
    }
    catch (error) {
        console.error(error);
    }
}
const accountToAddCredit = process.argv[2];
const valueOfCredit = Number(process.argv[3]);
addCredit(accountToAddCredit, valueOfCredit);
//# sourceMappingURL=addCredit.js.map