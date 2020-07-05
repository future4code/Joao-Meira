import { ShowDataBase } from "../data/ShowDataBase";
import { TokenGenerator } from "../services/tokenGenerator";
import { IdGenerator } from "../services/idGenerator";
import { CustomError } from "../errors/CustomError";
import { ShowInput, Show, stringToWeekDay, weekDayFormat } from "../model/Show";

export class ShowBusiness {
  constructor(
    private showDataBase: ShowDataBase,
    private idGenerator: IdGenerator
  ) {}

  async createShow(show: ShowInput) {
    if (show.startTime < 8 || show.endTime > 23) {
      throw new CustomError(
        "Os shows só poderão acontecer entre 8h e 23h",
        400
      );
    }

    const verifyShowConflict:
      | Show
      | undefined = await this.showDataBase.verifyConflict(show);
    if (verifyShowConflict) {
      throw new CustomError(
        `O horário entre ${verifyShowConflict.getStart()} e ${verifyShowConflict.getEnd()} do ${verifyShowConflict.getWeekDay()} NÃO está disponível`,
        400
      );
    }

    const id = this.idGenerator.generate();

    await this.showDataBase.createShow(
      new Show(
        id,
        stringToWeekDay(weekDayFormat(show.weekDay)),
        show.startTime,
        show.endTime,
        show.bandId
      )
    );
  }
}
