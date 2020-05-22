"use strict";
exports.__esModule = true;
var accounts = require('accounts.json');
function createAccount(userName, cpf, birthDay) {
    try {
        var newAccount = {
            userName: userName,
            cpf: cpf,
            birthDay: birthDay,
            balance: 0,
            bankStatement: []
        };
        // const util = require('util')
        // accounts.push(newAccount)
        // const newAccountString : string = `\n${util.inspect(newAccount)},`
        // fs.writeFileSync('accounts.json', accounts, 'utf8')
        // return console.log("Conta criada com sucesso!")
        console.log(accounts);
    }
    catch (error) {
        console.error(error);
    }
}
var nameToCreate = process.argv[2];
var cpfToCreate = Number(process.argv[3]);
var birthDayToCreate = process.argv[4];
createAccount(nameToCreate, cpfToCreate, birthDayToCreate);
