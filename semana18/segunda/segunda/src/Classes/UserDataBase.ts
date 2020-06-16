import { connection } from "../connection/dotenv";

export class UserDatabase {

  private connection = connection

  private static TABLE_NAME = "user_info"

  public async createUser(
    id : string,
    email : string,
    name : string,
    password : string
  ) : Promise<void> {
    await this.connection
      .insert({
        id,
        name,
        password,
        email
      })
      .into(
        UserDatabase.TABLE_NAME
      )
  }

  public validateEmail(
      email : string
  ) : boolean {
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const validation = regexp.test(email);
    
    return validation
  }

  public validatePassword(
      password : string
  ) : boolean {
    const regexp = new RegExp(/(?=.{6,})/);
    const validation = regexp.test(password);

    return validation 
  }


  public async getUserByEmail( 
      email : string 
  ): Promise<any> {
    const user = await this.connection
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });

    return user[0];
  }

  public async getUserById( 
    id : string 
  ): Promise<any> {
    const profile = await this.connection
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ id });

    return profile[0];
  }
}
