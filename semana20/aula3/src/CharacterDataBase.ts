import { BaseDataBase } from "./BaseDataBase";
import { Character } from "./Character";

export class CharacterDataBase extends BaseDataBase {
  protected tableName: string = "personagem_desenho";

  private toModel(dbModel?: any): Character | undefined {
    return (
      dbModel &&
      new Character(dbModel.id, dbModel.name, dbModel.anime, dbModel.img_url)
    );
  }

  public async createCharacter(character: Character): Promise<void> {
    await super.getConnection().raw(`
            INSERT INTO ${this.tableName}
                VALUES(
                    '${character.getId}',
                    '${character.getName}',
                    '${character.getAnime}',
                    '${character.getImgUrl}'
                )
            `);
  }
}
