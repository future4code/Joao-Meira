import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { TokenGenerator } from "../services/tokenGenerator";
import { IdGenerator } from "../services/idGenerator";
import { BandDataBase } from "../data/BandDataBase";


export class BandController {
  private static bandBusiness = new BandBusiness(
    new BandDataBase,
    new TokenGenerator,
    new IdGenerator
  );

  async registerBand(request: Request, response: Response) {
      
    await BandController.bandBusiness.registerBand(
        request.body.name,
        request.body.genre,
        request.body.leader,
        request.headers.authorization as string
      );

      response.status(200).send({message: "Banda registrada com sucesso!"});
    await new BandDataBase().destroyConnection()
  }

  async getBandByNameOrId (request: Request, response: Response){
  
  const bandInfo =  await BandController.bandBusiness.getBandByNameOrId(
      request.query.id as string,
      request.query.name as string
    )

  response.status(200).send({bandInfo})
  }
}
