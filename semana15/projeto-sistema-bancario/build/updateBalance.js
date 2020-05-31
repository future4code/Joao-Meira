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
exports.updateBalance = void 0;
const fs = __importStar(require("fs"));
const moment = require("moment");
const getAllAccounts_1 = require("./getAllAccounts");
const accountsList = require("../accounts.json");
function updateBalance() {
    const newAccountsList = accountsList.map((account) => {
        account.balance = 0;
        account.bankStatement.map(operation => {
            const operationDate = moment(operation.date, "DD/MM/YYYY");
            const isToUpdate = moment([2020, 10, 12]).diff(operationDate);
            console.log(isToUpdate);
            if (isToUpdate < 0) {
                return (operation);
            }
            else {
                return (account.balance += operation.value);
            }
        });
        return account;
    });
    try {
        fs.writeFileSync('accounts.json', JSON.stringify(newAccountsList));
        getAllAccounts_1.getAllAccounts();
    }
    catch (error) {
        console.error(error);
    }
}
exports.updateBalance = updateBalance;
//# sourceMappingURL=updateBalance.js.map