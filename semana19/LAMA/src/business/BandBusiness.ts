import { BandDataBase } from "../data/BandDataBase";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { Band } from "../model/Band";

export class BandBusiness {
  constructor(
    private bandDataBase: BandDataBase,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async registerBand(name: string, genre: string, leader: string, token: string) {
    if (!name) {
      throw new InvalidParameterError("Nome inválido");
    }

    if (!genre) {
      throw new InvalidParameterError("Gênero de música inválido");
    }

    if (!leader) {
      throw new InvalidParameterError("Responsável inválido");
    }

    const isAdmin = this.tokenGenerator.verify( token )
    if( isAdmin.role !== 'ADMIN'){
        throw new InvalidParameterError("Você precisa ser um ADMIN para registrar uma banda")
    }

    const id = this.idGenerator.generate();

    await this.bandDataBase.registerBand(new Band(id, name, genre, leader));
  }
}
