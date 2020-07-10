import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { ShowDataBase } from "../data/ShowDataBase";
import { IdGenerator } from "../services/idGenerator";
import { ShowInput } from "../model/Show";

export class ShowController {
  private static showBusiness = new ShowBusiness(
    new ShowDataBase(),
    new IdGenerator()
  );

  async createShow(request: Request, response: Response) {
    const input: ShowInput = {
      weekDay: request.body.weekDay,
      startTime: request.body.startTime,
      endTime: request.body.endTime,
      bandId: request.body.bandId,
    };
    await ShowController.showBusiness.createShow(input);

    response.status(200).send({
      message: "Show criado com sucesso!",
    });
  }

  async getShowsInDay(request: Request, response: Response) {
    const showsList = await ShowController.showBusiness.getShowsInDay(
      request.query.weekDay as any
    );

    response.status(200).send({
      showsList,
    });
  }
}
