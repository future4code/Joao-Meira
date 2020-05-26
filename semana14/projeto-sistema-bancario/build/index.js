"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accountsList = require("../accounts.json");
function verifyBalance(userName, userCpf) {
    try {
        accountsList.map((account) => {
            if (account.userName === userName && account.cpf === userCpf) {
                return (console.log(`O seu saldo é de R$ ${account.balance.toFixed(2)}`));
            }
            else {
                return account;
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
const userName = process.argv[2];
const userCpf = process.argv[3];
verifyBalance(userName, userCpf);
//# sourceMappingURL=index.js.map