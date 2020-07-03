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

  async registerBand(req: Request, res: Response) {
      
    await BandController.bandBusiness.registerBand(
        req.body.name,
        req.body.genre,
        req.body.leader,
        req.headers.authorization as string
      );

      try {
      res.status(200).send({message: "Banda registrada com sucesso!"});
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }
}
