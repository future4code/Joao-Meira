"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const userAccount_1 = require("./userAccount");
const moment_1 = __importDefault(require("moment"));
class Bank {
    constructor(accounts, fileManager) {
        this.accounts = accounts,
            this.fileManager = fileManager;
    }
    createAccount(name, cpf, birthDay) {
        const cpfVerification = this.accounts.find(account => {
            return account.cpf === cpf;
        });
        const ageVerification = moment_1.default().diff(birthDay, 'years');
        console.log(birthDay);
        if (cpfVerification) {
            console.log("\x1b[31m", "Este CPF já possuí uma conta cadastrada.");
        }
        else {
            if (ageVerification < 18) {
                console.log("\x1b[31m", 'Contas só podem ser abertas por maiores de 18 anos.');
            }
            else if (ageVerification >= 18 && cpf && birthDay) {
                try {
                    const newAccount = new userAccount_1.UserAccount(name, cpf, moment_1.default(birthDay).format('DD/MM/YYYY'));
                    this.accounts.push(newAccount);
                    this.fileManager.writeAccountToFile(this.accounts);
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
    getAllAccounts() {
        try {
            this.accounts.map(account => {
                const thisAccount = new userAccount_1.UserAccount(account.name, account.cpf, account.birthDay);
                console.log("\x1b[1m", `
                Titular da Conta: ${thisAccount.name}
                CPF: ${thisAccount.cpf}
                Data de Nascimento: ${thisAccount.birthDay}
                Saldo: R$${thisAccount.getBalance().toFixed(2)}
                ` +
                    'Extrato da conta:\n', thisAccount.transactions, '\n');
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    getAllAccountsByCpf() {
    }
}
exports.Bank = Bank;
//# sourceMappingURL=bank.js.map