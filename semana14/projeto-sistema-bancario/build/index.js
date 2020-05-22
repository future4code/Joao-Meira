"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountJoao = exports.withdraw3 = exports.withdraw2 = exports.withdraw1 = void 0;
const fs = require("fs");
exports.withdraw1 = {
    value: 100,
    date: '10-5-2020',
    description: "compra jogo The Witcher 3"
};
exports.withdraw2 = {
    value: 50,
    date: '11-5-2020',
    description: "compra acordoamento violão"
};
exports.withdraw3 = {
    value: 100,
    date: '10-5-2020',
    description: "compra posto caçula"
};
exports.accountJoao = {
    userName: "João Meira",
    cpf: 10001021000,
    birthDay: '21-10-1987',
    balance: 1000,
    bankStatement: [exports.withdraw1, exports.withdraw2, exports.withdraw3]
};
function createAccount(userName, cpf, birthDay) {
    try {
        const newAccount = {
            userName: userName,
            cpf: cpf,
            birthDay: birthDay,
            balance: 0,
            bankStatement: [],
        };
        const util = require('util');
        const newAccountString = `\n${util.inspect(newAccount)},`;
        fs.appendFileSync('accounts.json', newAccountString, 'utf8');
        return console.log("Conta criada com sucesso!");
    }
    catch (error) {
        console.error(error);
    }
}
createAccount("zé", 82041103900, "21-10-1987");
//# sourceMappingURL=index.js.map