import * as fs from 'fs';

function getAllAccounts () {
    try{
        console.log(fs.readFileSync('accounts.json', 'utf8'))
    } catch(error) {
        console.error(error)
    }
}

getAllAccounts()