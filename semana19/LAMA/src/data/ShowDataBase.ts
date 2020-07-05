import { Show, ShowInput, weekDayFormat } from "../model/Show";
import { BaseDataBase } from "./BaseDatabase";

export class ShowDataBase extends BaseDataBase {
  protected tableName: string = "lama_shows_table";

  private toModel(dbModel?: any): Show | undefined {
    return (
      dbModel &&
      new Show(
        dbModel.id,
        dbModel.week_day,
        dbModel.start_time,
        dbModel.end_time,
        dbModel.band_id
      )
    );
  }

  async createShow( show: Show): Promise<void> {
    console.log(show)
    await super.getConnection().raw(`
        INSERT INTO ${this.tableName}
            VALUES(
                '${show.getId()}',
                '${show.getWeekDay()}',
                ${show.getStart()},
                ${show.getEnd()},
                '${show.getBandId()}'
            )    
    `);
  }

  async verifyScheduele( show : ShowInput ): Promise<string> {
    const day = weekDayFormat(show.weekDay)
    const conflict = await super.getConnection().raw(`
        SELECT * FROM ${this.tableName}
          WHERE 
          (
            week_day = '${day}' 
            AND 
            start_time = ${show.startTime}
          ) OR (
            week_day = '${day}' 
            AND
            end_time = ${show.endTime}
          ) OR (
            week_day = '${day}'
            AND
            (start_time < ${show.endTime} AND start_time > ${show.startTime})
          ) OR (
            (end_time > ${show.startTime} AND end_time < ${show.endTime})
          )
    `);
    console.log(conflict[0][0])
    return conflict[0][0]
  }
}


