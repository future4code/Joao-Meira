import { BaseDataBase } from "./BaseDatabase";
import { Band } from "../model/Band";

export class BandDataBase extends BaseDataBase {
  protected tableName: string = "lama_bands_table";

  private toModel(dbModel?: any): Band | undefined {
    return (
      dbModel &&
      new Band(
        dbModel.id,
        dbModel.name,
        dbModel.genre,
        dbModel.leader
      )
    );
  }

  public async registerBand(band: Band): Promise<void> {
    await super.getConnection().raw(`
        INSERT INTO ${this.tableName}
        VALUES (
          '${band.getId()}', 
          '${band.getName()}', 
          '${band.getGenre()}',
          '${band.getLeader()}'
        )`);
  }

  public async getbandById(id: string): Promise<Band | undefined> {
    const result = await super.getConnection().raw(`
      SELECT * from ${this.tableName} WHERE id = '${id}'
      `);
    return this.toModel(result[0][0]);
  }

  public async getAllbands(): Promise<Band[]> {
    const bands = await super.getConnection().raw(`
      SELECT * from ${this.tableName}
    `);
    return bands[0].map((band: any) => {
      return this.toModel(band);
    });
  }
}
