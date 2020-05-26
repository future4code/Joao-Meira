"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accountsList = require("../accounts.json");
function verifyBalance(userName, userCpf) {
    let infoVerify = 0;
    accountsList.filter(account => {
        if (account.userName === userName && account.cpf === userCpf)
            infoVerify = 1;
    });
    try {
        if (infoVerify) {
            accountsList.map((account) => {
                if (account.userName === userName && account.cpf === userCpf) {
                    return (console.log(`O seu saldo é de R$ ${account.balance.toFixed(2)}`));
                }
            });
        }
        else {
            console.log('\x1b[7m', 'Não existe nenhuma conta registrada com este Nome e CPF');
        }
    }
    catch (error) {
        console.error(error);
    }
}
const userName = process.argv[2];
const userCpf = process.argv[3];
verifyBalance(userName, userCpf);
//# sourceMappingURL=checkBalance.js.map