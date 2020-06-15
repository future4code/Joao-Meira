### EXERCICIO 1
*a. Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?*
**RESPOSTA**:
Sim. O uso de strings possibilita mais opções por cada caracter usado na identificação, colaborando com a exclusividade de uma senha ou identificação, tanto quanto na segurança

*b. A partir de hoje, vamos tentar isolar, ao máximo, as nossas lógicas em classes. Uma das vantagens disso é, por exemplo, utilizar a hierarquia para fazer modificações simples. Dado isso, crie uma classe que possua um um método público para gerar um id.*
**RESPOSTA**:
```
import { v4 } from 'uuid';

export class IdGenerator {

    public generate() : string {
        return v4();
    }
}
```

### EXERCICIO 2

*a. Explique o código acima com as suas palavras.*
**RESPOSTA**:
O código acima está realizando a conexão com o banco de dados através da biblioteca knex, trazendo como host, port, user, password e database as informações contidas no arquivo .env.
Em seguida, ativa uma função para criar usuário inserindo na tabela "User" os valores de id, email e passowrd.

*b. Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.*
**RESPOSTA**:
```
CREATE TABLE user_info(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);
```

*c. Pela mesma justificativa do exercício anterior, crie uma classe para ser responsável pela comunicação do usuário com a tabela de usuários. Ela deve possuir um método que cria o usuário no banco; além disso, as variáveis necessárias para realizar as queries devem ser atributos dessa classe*
**RESPOSTA**:
```
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
}
```

*d. Crie um usuário utilizando somente a classe que você criou*
**RESPOSTA**:
```
const dataBase = new UserDatabase()
dataBase.createUser(
  id,
  "zima@blue.com",
  "Zima",
  "12345"
)
```


### EXERCICIO 3
*a. O que a linha `as string` faz? Por que precisamos usar ela ali?*
**RESPOSTA**:
"as a string" funciona como uma declaração de tipo forçada. Ela é serve, nesse caso, para possibilitar que o objeto trazido de process.env.JWT_KEY possa ser aceito, já que seu tipo traz a possibilidade de valor de string e undefined.

*b.* *Agora, crie a classe que será responsável pela autorização dos usuários com um método que gere o token. Além disso, crie uma interface a parte para representar o input desse método. Lembre-se de colocar todas as constantes em atributos da classe.*
**RESPOSTA**:
```
import * as jwt from "jsonwebtoken";

export class Authenticator {
    private static EXPIRES_IN = "1d";

    public generateToken( 
        userId : AuthenticationData 
    ) : string {
        return jwt.sign (
            userId,
            process.env.JWT_KEY as string,
            {
                expiresIn: Authenticator.EXPIRES_IN
            }
        )
    }
    
    public getData ( token : string) : AuthenticationData {
        const userData = jwt.verify(
            token,
            process.env.JWT_KEY as string,
        ) as any

        return{
            id: userData.id,
        }
    }
}

export interface AuthenticationData {
    id : string
}
```


### EXERCICIO 4
*a. Crie o endpoint que realize isso, com as classes que você implementou anteriormente*
**RESPOSTA**:
```
import { Request, Response } from "express";
import { IdGenerator } from '../Classes/IdGenerator'
import { Authenticator } from '../Classes/Authenticator'
import { UserDatabase } from '../Classes/UserDataBase'

export const createUserEndingPoint = async (
    request : Request,
    response : Response
) => {
    try{
        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const newUser = {
            id: id,
            email: request.body.email,
            name: request.body.name,
            password: request.body.password
        }
        const dataBase = new UserDatabase()
        await dataBase.createUser(
            newUser.id,
            newUser.email,
            newUser.name,
            newUser.password
        )

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(
            {
                id,
            }
        )
        response
        .status(200)
        .send({ token: token })
    } catch(error){
        response
        .status(400)
        .send({
          message: error.message
        })
    }
}
```

*b. Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*
**RESPOSTA**:
```
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
}
```
.
```
const toValidate = dataBase.validateEmail(newUser.email)
        if( !toValidate ) {
            throw new Error("Email inválido!")
}
```
 

*c. Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais*
**RESPOSTA**:
```
  public validatePassword(
      password : string
  ) : boolean {
    const regexp = new RegExp(/(?=.{6,})/);
    const validation = regexp.test(password);
    return validation 
  }
```
.
```
const validatePassword = dataBase.validatePassword(newUser.password)
if( !validatePassword ) {
	throw new Error("A senha deve ter mais de 6 caracteres!")
}
```


### EXERCICIO 5
*a. Altere a classe do seu banco de dados para que ele tenha um método que retorne as informações de um usuário a partir do email*
**RESPOSTA**:
```
  public async getUserByEmail( email: string ): Promise<any> {
    const user = await this.connection
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });
    return user[0];
  }
```

*b. Teste a sua função*
**RESPOSTA**:
```
export const getUserByEmailEndingPoint = async (
    request : Request,
    response : Response
) => {
    try{
        const dataBase = new UserDatabase()
        const userInfo = await dataBase.getUserByEmail( request.body.email )

        if (!userInfo) {
            throw new Error("Usuário não encontrado!")
        }

        response
        .status(200)
        .send( userInfo )
    } catch(error){
        response
        .status(400)
        .send({
          message: error.message
        })
    }
}
app.get("/user/search", getUserByEmailEndingPoint)
```


### EXERCICIO 6
*a. Crie o endpoint que realize isso, com as classes que você implementou anteriormente*

*b. Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*

**RESPOSTA**:
```
import { Request, Response } from "express";
import { UserDatabase } from "../Classes/UserDataBase";
import { Authenticator } from "../Classes/Authenticator";

export const loginEndingPoint = async (
    request : Request,
    response : Response
) => {
    try{
        const loginData = {
            email: request.body.email,
            password: request.body.password
        }
    
        const dataBase = new UserDatabase()
        
        const validateEmail = dataBase.validateEmail( loginData.email )
        if( !validateEmail ) {
            throw new Error("Email inválido!")
        }

        const user = await dataBase.getUserByEmail( loginData.email )

        if( user.password !== loginData.password ) {
            throw new Error("A senha deve ter mais de 6 caracteres!")
        }
    
        const authenticator = new Authenticator()
        const token = authenticator.generateToken(
            {
                id: user.id
            }
        )

        response
            .status(200)
            .send( {token: "token gerado pelo jwt"} )
    } catch(error) {
        response
            .status(400)
            .send({
            message: error.message
            })
    }
}
```

### EXERCICIO 7
*a. O que a linha `as any` faz? Por que precisamos usá-la ali?*
**RESPOSTA**:
Ela possibilita que o payload resultante da equação jwt.verify retorne qualquer tipo de objeto. Isso é necessário porque é possível que essa equação retorna valor em string e objeto.

*b. Altere a sua classe do JWT para que ela tenha um método que realize a mesma funcionalidade da função acima*
**RESPOSTA**:
```
import * as jwt from "jsonwebtoken";

export class Authenticator {
    private static EXPIRES_IN = "1 day";

    public generateToken( 
        userId : AuthenticationData 
    ) : string {
        return jwt.sign (
            userId,
            process.env.JWT_KEY as string,
            {
                expiresIn: Authenticator.EXPIRES_IN
            }
        )
    }
    
    public getData ( token : string ) : AuthenticationData { 
        const userData = jwt.verify(
            token,
            process.env.JWT_KEY as string,
        ) as any

        return{
            id: userData.id,
        }
    }
}

export interface AuthenticationData {
    id : string
}
```


### EXERCICIO 8
*a. Comece alterando a classe do banco de dados para que ela tenha um método que retorne o usuário a partir do id*

*b. Crie o endpoint com as especificações passadas*
**RESPOSTA**:
```
import { Request, Response } from "express";
import { UserDatabase } from '../Classes/UserDataBase'
import { Authenticator } from "../Classes/Authenticator";

export const getUserProfileEndingPoint = async (
    request : Request,
    response : Response
) => {
    try{
        const token = request.headers.authorization as string

        const authenticator = new Authenticator()
        const authenticationData = authenticator.getData( token )

        const dataBase = new UserDatabase()
        const userProfile = await dataBase.getUserById( authenticationData.id )

        response
        .status(200)
        .send( userProfile )
    } catch(error){
        response
        .status(400)
        .send({
          message: "error.message"
        })
    }
}

```











