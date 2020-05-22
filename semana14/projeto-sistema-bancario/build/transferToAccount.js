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
let credit = 0;
let verifyUserInfo = 0;
let verifyReceiver = 0;
function transferValue(userNameTransfering, cpfTransfering, userNameReceiving, cpfReceiving, valueTransfered) {
    accountsList.map(account => {
        if (account.cpf === cpfTransfering, account.balance >= valueTransfered) {
            return credit = valueTransfered;
        }
    });
    try {
        const newAccountsList = accountsList.map((account) => {
            if (account.balance >= valueTransfered && account.cpf === cpfTransfering && account.userName === userNameTransfering) {
                return (verifyUserInfo = 1,
                    account.balance -= valueTransfered,
                    account);
            }
            else if (credit === valueTransfered && account.cpf === cpfReceiving && account.userName === userNameReceiving) {
                return (verifyReceiver = 1,
                    account.balance += valueTransfered,
                    account);
            }
            else {
                return account;
            }
        });
        if (credit === valueTransfered && verifyUserInfo === 1 && verifyReceiver === 1) {
            fs.writeFileSync('accounts.json', JSON.stringify(newAccountsList));
            console.log(`Transferência de ${valueTransfered} para ${userNameReceiving} efetuada com sucesso!`);
        }
        else if (credit === valueTransfered && verifyUserInfo === 1 && verifyReceiver === 0) {
            console.log(`Informações do Depositário incorretas.`);
        }
        else if (credit === valueTransfered && verifyUserInfo === 0 && verifyReceiver === 1) {
            console.log(`Informações do depositante incorretas.`);
        }
        else {
            console.log(`Saldo insuficiente para transferência!`);
        }
    }
    catch (error) {
        console.error(error);
    }
}
const userTransfering = process.argv[2];
const cpfTransfering = process.argv[3];
const userReceiving = process.argv[4];
const cpfReceiving = process.argv[5];
const valueTransfered = Number(process.argv[6]);
transferValue(userTransfering, cpfTransfering, userReceiving, cpfReceiving, valueTransfered);
//# sourceMappingURL=transferToAccount.js.map