import { Request, Response } from "express";
import { ShowBusimess } from "../business/ShowBusiness";
import { ShowDataBase } from "../data/ShowDataBase";
import { TokenGenerator } from "../services/tokenGenerator";
import { IdGenerator } from "../services/idGenerator";


export class ShowController {
    private static showBusiness = new ShowBusimess(
        new ShowDataBase,
        new TokenGenerator,
        new IdGenerator
    )

    async createShow( request: Request, response: Response){

        await ShowController.showBusiness.createShow(
            request.body.weekDay,
            request.body.startTime,
            request.body.endTime,
            request.body.bandId
        )

        response.status(200).send({
            message: "Show criado com sucesso!"
        })
    }
}