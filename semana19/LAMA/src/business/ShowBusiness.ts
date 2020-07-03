import { ShowDataBase } from "../data/ShowDataBase";
import { TokenGenerator } from "../services/tokenGenerator";
import { IdGenerator } from "../services/idGenerator";


export class ShowBusimess {
    constructor(
        private showDataBase: ShowDataBase,
        private tokenGenerator: TokenGenerator,
        private idGenerator: IdGenerator
    ){}

    async createShow(
        weekDay: string,
        startTime: number,
        endTime: number,
        bandId: string
    ){
            
        }
}