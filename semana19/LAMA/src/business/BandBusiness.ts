import { BandDataBase } from "../data/BandDataBase";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { Band } from "../model/Band";
import { CustomError } from "../errors/CustomError";

export class BandBusiness {
  constructor(
    private bandDataBase: BandDataBase,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async registerBand(
    name: string,
    genre: string,
    leader: string,
    token: string
  ) {
    if (!name) {
      throw new InvalidParameterError("Nome inválido");
    }

    if (!genre) {
      throw new InvalidParameterError("Gênero de música inválido");
    }

    if (!leader) {
      throw new CustomError("Responsável inválido", 404);
    }

    const isAdmin = this.tokenGenerator.verify(token);
    if (isAdmin.role !== "ADMIN") {
      throw new InvalidParameterError(
        "Você precisa ser um ADMIN para registrar uma banda"
      );
    }

    const id = this.idGenerator.generate();

    await this.bandDataBase.registerBand(new Band(id, name, genre, leader));
  }

  async getBandByNameOrId(name?: string, id?: string) {
    if (id) {
      return await this.bandDataBase.getbandById(id);
    } else if (name) {
      await this.bandDataBase.getbandByName( name )
    } else {
      throw new CustomError("Campos de busca inválidos", 422)
    }
  }
}
