import { Request, Response } from "express";
import { ShowBusimess } from "../business/ShowBusiness";
import { ShowDataBase } from "../data/ShowDataBase";
import { TokenGenerator } from "../services/tokenGenerator";
import { IdGenerator } from "../services/idGenerator";
import { ShowInput } from "../model/Show";


export class ShowController {
    private static showBusiness = new ShowBusimess(
        new ShowDataBase,
        new IdGenerator
    )

    async createShow( request: Request, response: Response){

        const input : ShowInput = {
            weekDay: request.body.weekDay,
            startTime: request.body.startTime,
            endTime: request.body.endTime,
            bandId: request.body.bandId
        }
        await ShowController.showBusiness.createShow(input)

        response.status(200).send({
            message: "Show criado com sucesso!"
        })
    }
}