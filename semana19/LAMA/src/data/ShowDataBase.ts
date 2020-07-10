import { Show, ShowInput, weekDayFormat, WeekDay } from "../model/Show";
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

  async verifyConflict( show : ShowInput ): Promise<Show | undefined> {
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
            (week_day = '${day}' AND start_time < ${show.endTime} AND start_time > ${show.startTime})
          ) OR (
            (week_day = '${day}' AND end_time > ${show.startTime} AND end_time < ${show.endTime})
          )
    `);
    return this.toModel(conflict[0][0])
  }

  public async getShowsInDay(weekDay : string): Promise<Show[]> {
    const shows = await super.getConnection().raw(`
      SELECT * from ${this.tableName}
      WHERE week_day = '${weekDay}'
    `);
    return shows[0].map((show: any) => {
      return this.toModel(show);
    });
  }
}


