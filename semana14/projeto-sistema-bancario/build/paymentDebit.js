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
let verifyDebit = 0;
function paymentDebit(cpfToDebit, paymentDescription, dateOfPayment, debitValue) {
    const debit = {
        value: debitValue,
        date: dateOfPayment,
        description: paymentDescription
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
            console.log(`O pagamento no valor de ${debitValue} foi efetuado com sucesso!`);
        }
        else {
            console.log(`O pagamento não foi processado`);
        }
    }
    catch (error) {
        console.error(error);
    }
}
const cpfToDebit = process.argv[2];
const paymentDescription = process.argv[3];
const dateOfPayment = process.argv[4];
const debitValue = Number(process.argv[5]);
paymentDebit(cpfToDebit, paymentDescription, dateOfPayment, debitValue);
//# sourceMappingURL=paymentDebit.js.map