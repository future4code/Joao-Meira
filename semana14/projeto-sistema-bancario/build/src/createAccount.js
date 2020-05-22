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
const fs = __importStar(require("fs"));
const accounts_json_1 = __importDefault(require("../accounts.json"));
const accountsList = accounts_json_1.default;
function createAccount(userName, cpf, birthDay) {
    const cpfVerification = accountsList.find(account => {
        return account.cpf === cpf;
    });
    if (cpfVerification) {
        console.log("Este CPF já possuí uma conta cadastrada.");
    }
    else {
        try {
            const newAccount = {
                userName: userName,
                cpf: cpf,
                birthDay: birthDay,
                balance: 0,
                bankStatement: [],
            };
            accountsList.push(newAccount);
            const newAccountsList = JSON.stringify(accountsList);
            fs.writeFileSync('accounts.json', newAccountsList, 'utf8');
        }
        catch (error) {
            console.error(error);
        }
    }
}
createAccount("joao", "122231", "21101987");
//# sourceMappingURL=createAccount.js.map