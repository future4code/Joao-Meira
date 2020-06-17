import * as fs from 'fs'
import { Student } from './Student';
import { Teacher } from './Teacher';
import { Mission } from './Mission';

export class JSONFileManager {
    
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName
    }

    writeToFile( arrayToSave : Teacher[] | Mission[] | Student[] ){
        fs.writeFileSync(
            this.fileName, 
            JSON.stringify(arrayToSave, null, 2))
    }

    getFromFile() : Object {
        return JSON.parse(fs.readFileSync(this.fileName).toString())
    }
}
