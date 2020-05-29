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
exports.paymentDebit = void 0;
const fs = __importStar(require("fs"));
const accountsList = require("../accounts.json");
let verifyDebit = 0;
function paymentDebit(cpfToDebit, debitDescription, debitDate, debitValue) {
    const debit = {
        value: (debitValue) * -1,
        date: debitDate,
        description: debitDescription
    };
    try {
        const newAccountsList = accountsList.map((account) => {
            if (account.balance >= debitValue && account.cpf === cpfToDebit) {
                verifyDebit = 1;
                return (account.balance -= debitValue,
                    account.bankStatement.push(debit),
                    account);
            }
            else {
                return account;
            }
        });
        if (verifyDebit) {
            fs.writeFileSync('accounts.json', JSON.stringify(newAccountsList));
            console.log(`Foi realizado o débito de R$${debitValue}.`);
        }
        else {
            console.log(`O débito não foi processado`);
        }
    }
    catch (error) {
        console.error(error);
    }
}
exports.paymentDebit = paymentDebit;
//# sourceMappingURL=paymentDebit.js.map