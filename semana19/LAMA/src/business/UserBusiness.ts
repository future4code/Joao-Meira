import { UserDatabase } from "../data/UserDatabase";
import { User, stringToUserRole } from "../model/User";
import { IdGenerator } from "../services/idGenerator";
import { HashGenerator } from "../services/hashGenerator";
import { TokenGenerator } from "../services/tokenGenerator";
import { NotFoundError } from "../errors/NotFoundError";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import validateEmail from "../../util/emailValidate";
import { validatePassword } from "../../util/validatePassword";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private hashGenerator: HashGenerator,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async signup(
    name: string,
    email: string,
    password: string,
    role: string
  ) {
    if (!name ) {
      throw new InvalidParameterError("Nome inválido");
    }

    if (!validateEmail(email)) {
      throw new InvalidParameterError("Email inválido");
    }

    if (!validatePassword(password)) {
      throw new InvalidParameterError("Password inválido");
    }

    if (!role){
      throw new InvalidParameterError("Tipo de usuário inválido")
    }

    const id = this.idGenerator.generate();
    const encryptedPassword = await this.hashGenerator.hash(password);

    await this.userDatabase.createUser(
      new User(id, name, email, encryptedPassword, stringToUserRole(role))
    );

    const accessToken = this.tokenGenerator.generate({
      id,
      role,
    });
    return { accessToken };
  }

  public async login(email: string, password: string) {
    if (!validateEmail(email)) {
      throw new InvalidParameterError("Email ou senha inválido");
    }

    if (!validatePassword(password)) {
      throw new InvalidParameterError("Email ou senha inválido");
    }

    const user = await this.userDatabase.getUserByEmail(email);

    if (!user) {
      throw new NotFoundError("Este usuário não existe");
    }

    const isPasswordCorrect = await this.hashGenerator.compareHash(
      password,
      user.getPassword()
    );

    if (!isPasswordCorrect) {
      throw new InvalidParameterError("Email ou senha incorretos");
    }

    const accessToken = this.tokenGenerator.generate({
      id: user.getId(),
      role: user.getRole(),
    });

    return { accessToken };
  }
}
