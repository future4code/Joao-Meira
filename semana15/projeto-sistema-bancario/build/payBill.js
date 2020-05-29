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
exports.payBill = void 0;
const fs = __importStar(require("fs"));
const moment = require("moment");
const accountsList = require("../accounts.json");
let verifyPayment = 0;
function payBill(cpfToPay, paymentDescription, paymentValue, dateOfPayment) {
    const dateNow = moment().diff(dateOfPayment, "days");
    console.log(dateOfPayment);
    console.log(dateNow);
    const scheduledPayment = {
        value: (paymentValue) * -1,
        date: moment(dateOfPayment).format('DD/MM/YYYY'),
        description: paymentDescription
    };
    const payment = {
        value: (paymentValue) * -1,
        date: moment().format('DD/MM/YYYY'),
        description: paymentDescription
    };
    if (dateNow <= 0 &&
        cpfToPay &&
        paymentDescription &&
        paymentValue) {
        const newAccountsList = accountsList.map((account) => {
            if (account.balance >= paymentValue && account.cpf === cpfToPay) {
                verifyPayment = 1;
                return (account.bankStatement.push(scheduledPayment),
                    account);
            }
            else {
                return account;
            }
        });
        try {
            if (verifyPayment) {
                fs.writeFileSync('accounts.json', JSON.stringify(newAccountsList));
                console.log("\x1b[32m", `O pagamento no valor de ${paymentValue} foi efetuado com sucesso!`);
            }
            else {
                console.log("\x1b[31m", `O pagamento NÃO foi processado. Confira as informações`);
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    else if (paymentDescription &&
        cpfToPay &&
        paymentValue) {
        const newAccountsList = accountsList.map((account) => {
            if (account.balance >= paymentValue && account.cpf === cpfToPay) {
                verifyPayment = 1;
                return (account.balance -= paymentValue,
                    account.bankStatement.push(payment),
                    account);
            }
            else {
                return account;
            }
        });
        try {
            if (verifyPayment) {
                fs.writeFileSync('accounts.json', JSON.stringify(newAccountsList));
                console.log("\x1b[32m", `O pagamento no valor de ${paymentValue} foi efetuado com sucesso!`);
            }
            else {
                console.log("\x1b[31m", `O pagamento NÃO foi processado. Confira as informações.`);
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    else {
        console.log("\x1b[31m", `A data do pagamento é inválida ou alguma informação necessária não foi informada.`);
    }
}
exports.payBill = payBill;
//# sourceMappingURL=payBill.js.map