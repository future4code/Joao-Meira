import * as fs from 'fs'
import { UserAccount } from './userAccount';

export class JSONFileManager {
    
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName
    }

    writeAccountToFile( accountsToSave : UserAccount[] ){
        fs.writeFileSync(
            this.fileName, 
            JSON.stringify(accountsToSave, null, 2))
    }

    getAccountsFromFile() : Object {
        return JSON.parse(fs.readFileSync(this.fileName).toString())
    }
}
