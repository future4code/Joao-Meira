"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
const bankTransaction_1 = require("./bankTransaction");
const moment_1 = __importDefault(require("moment"));
class UserAccount {
    constructor(name, cpf, birthDay) {
        this.name = name;
        this.birthDay = birthDay;
        this.cpf = cpf;
        this.balance = 0;
        this.transactions = [];
    }
    getBalance() {
        return this.balance;
    }
    addBalance(value) {
        const credit = new bankTransaction_1.BankTransaction(value, `Você depositou o valor de R$${value.toFixed(2)}`, moment_1.default().format("DD/MM/YYYY"));
        return (this.balance = this.balance + value,
            this.transactions.push(credit),
            console.log(this.balance, this.transactions),
            console.log("\x1b[32m", `Depósito de R$${value.toFixed(2)} efetuado com sucesso!`));
    }
}
exports.UserAccount = UserAccount;
//# sourceMappingURL=userAccount.js.map