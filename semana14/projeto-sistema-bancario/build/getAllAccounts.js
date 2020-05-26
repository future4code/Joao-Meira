"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accountsList = require("../accounts.json");
function getAllAccounts() {
    try {
        accountsList.map(account => {
            console.log(`Titular da Conta: ${account.userName}
            CPF: ${account.cpf}
            Data de Nascimento: ${account.birthDay}
            Saldo: ${account.balance.toFixed(2)}
            ` +
                'Extrato da conta:\n', account.bankStatement, '\n');
            console.log();
        });
    }
    catch (error) {
        console.error(error);
    }
}
getAllAccounts();
//# sourceMappingURL=getAllAccounts.js.map