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
exports.transferToAccount = void 0;
const fs = __importStar(require("fs"));
const moment = require("moment");
const accountsList = require("../accounts.json");
let verifyCredit = 0;
let verifyUserInfo = 0;
let verifyReceiver = 0;
function transferToAccount(userNameTransfering, cpfTransfering, userNameReceiving, cpfReceiving, valueTransfered) {
    const transferCredit = {
        value: valueTransfered,
        date: moment().format('L'),
        description: `Transferência bancária de ${userNameTransfering}`
    };
    const transferDebit = {
        value: (valueTransfered) * -1,
        date: moment().format('L'),
        description: `Transferência bancária para ${userNameReceiving}`
    };
    accountsList.map(account => {
        if (account.cpf === cpfTransfering, account.balance >= valueTransfered) {
            return verifyCredit = valueTransfered;
        }
    });
    try {
        const newAccountsList = accountsList.map((account) => {
            if (account.balance >= valueTransfered &&
                account.cpf === cpfTransfering &&
                account.userName === userNameTransfering) {
                return (verifyUserInfo = 1,
                    account.balance -= valueTransfered,
                    account.bankStatement.push(transferDebit),
                    account);
            }
            else if (verifyCredit === valueTransfered &&
                account.cpf === cpfReceiving &&
                account.userName === userNameReceiving) {
                return (verifyReceiver = 1,
                    account.balance += valueTransfered,
                    account.bankStatement.push(transferCredit),
                    account);
            }
            else {
                return account;
            }
        });
        if (verifyCredit === valueTransfered &&
            verifyUserInfo === 1 &&
            verifyReceiver === 1) {
            fs.writeFileSync('accounts.json', JSON.stringify(newAccountsList));
            console.log("\x1b[32m", `Transferência de ${valueTransfered} para ${userNameReceiving} efetuada com sucesso!`);
        }
        else if (verifyCredit === valueTransfered &&
            verifyUserInfo === 1 &&
            verifyReceiver === 0) {
            console.log("\x1b[31m", `Informações do Depositário incorretas.`);
        }
        else if (verifyCredit !== valueTransfered &&
            verifyUserInfo === 0) {
            console.log("\x1b[31m", `Saldo insuficiente para transferência!
                Informações do depositante incorretas.`);
        }
        else if (verifyCredit === valueTransfered &&
            verifyUserInfo === 0 &&
            verifyReceiver === 1) {
            console.log("\x1b[31m", `Informações do depositante incorretas.`);
        }
        else {
            console.log("\x1b[31m", `A transferência não pôde ser processada.`);
        }
    }
    catch (error) {
        console.error(error);
    }
}
exports.transferToAccount = transferToAccount;
//# sourceMappingURL=transferToAccount.js.map