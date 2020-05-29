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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccount = void 0;
const fs = __importStar(require("fs"));
const moment_1 = __importDefault(require("moment"));
const accountsList = require("../accounts.json");
function createAccount(userName, cpf, birthDay) {
    const cpfVerification = accountsList.find(account => {
        return account.cpf === cpf;
    });
    const ageVerification = moment_1.default().diff(birthDay, 'years');
    console.log(ageVerification);
    console.log(ageVerification);
    if (cpfVerification) {
        console.log("\x1b[31m", "Este CPF já possuí uma conta cadastrada.");
    }
    else {
        if (ageVerification < 18) {
            console.log("\x1b[31m", 'Contas só podem ser abertas por maiores de 18 anos.');
        }
        else if (ageVerification >= 18 && cpf && birthDay) {
            try {
                const newAccount = {
                    userName,
                    cpf,
                    birthDay: moment_1.default(birthDay).format('DD/MM/YYYY'),
                    balance: 0,
                    bankStatement: [],
                };
                accountsList.push(newAccount);
                const newAccountsList = JSON.stringify(accountsList);
                fs.writeFileSync('accounts.json', newAccountsList, 'utf8');
                return console.log("\x1b[32m", "Conta criada com sucesso!");
            }
            catch (error) {
                console.error(error);
            }
        }
        else {
            console.log("\x1b[31m", "Está faltando alguma informação!");
        }
    }
}
exports.createAccount = createAccount;
//# sourceMappingURL=createAccount.js.map