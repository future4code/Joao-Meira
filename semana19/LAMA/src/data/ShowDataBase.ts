import { Show } from "../model/Show";
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

  async createShow(show: Show): Promise<void> {
    await super.getConnection().raw(`
        INSERT INTO ${this.tableName}
            VALUES(
                '${show.getId}',
                '${show.getWeekDay}',
                ${show.getStart},
                ${show.getEnd},
                '${show.getBandId}'
            )    
    `);
  }
}
