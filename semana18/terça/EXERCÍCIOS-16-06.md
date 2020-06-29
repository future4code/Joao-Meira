### EXERCÍCIO 1
*a. O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?*
**RESPOSTA:**
Round é a variável que cuida da quantidade de iterações para criação do password hash. Quanto maior a quantidade de iterações, maior será a segurança promovida pelo método hash implementado e, consequentemente, maior o custo para produção desse método.

b*. Instale o bcryptjs no seu projeto e comece criando a classe HashManager. Por ora, implemente a função que **criptografe** uma string usando o bcryptjs.*
**RESPOSTA:**
```
import * as bcrypt from "bcryptjs";


async function hash(password : string) : Promise<void> {

  const rounds = Number(process.env.BCRYPT_COST);
  const salt = await bcrypt.genSalt(rounds);
  const result = await bcrypt.hash(password , salt);
  console.log(result);
  
  console.log(result);
}

hash("eu sou uma string")

console:
$2a$10$OLJioyq2IrX2WNcZD6PRKOhTwSyVo1jesciuLKagrMSmTAiWzpQ6m
```


*c. Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `compare` do bcryptjs*
**RESPOSTA:**
```
 async function compare(
  password : string, 
  hash : string
) : Promise<void>{
  const result = await bcrypt.compare(password , hash);
  
  console.log(result)
}

compare("eu sou uma string", "$2a$10$XImmzHc3nrHqThETx3Etc.uvd9TupygSlSom0dI2h9N3uDxFS.A0i")

console:
true
```


### EXERCICIO 2
*a. Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.*
**RESPOSTA:**
O cadastro, pois todas as senhas estão configuradas com o formato não protegido, o que não permite que elas sejam conferidas nem utilizadas para o login.

*b. Faça a alteração do primeiro endpoint*
**RESPOSTA:**
```
export const createUserEndingPoint = async (req: Request, res: Response) => {
try {

const userData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
};

function validateEmail( email : string ) : boolean {
const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const validation = regexp.test(email);

return validation
}
const isEmail = validateEmail(userData.email)
    if( !isEmail ) {
    throw new Error("Email inválido!")
}

function validatePassword( password : string ) : boolean {
const regexp = new RegExp(/(?=.{6,})/);
const validation = regexp.test(password);

return validation 
}

const isPassword = validatePassword(userData.password)
if( !isPassword ) {
    throw new Error("A senha deve ter mais de 6 caracteres!")
}

const idGenerator = new IdGenerator().generate;

const hashManager = new HashManager();

const hashPassword = await hashManager.hash(userData.password);


const userDb = new UserDatabase();
await userDb.createUser(
    idGenerator(), 
    userData.name, 
    userData.email, 
    hashPassword, 
    userData.role
    );

const authenticator = new Authenticator();
const token = authenticator.generateToken({
    id: idGenerator(),
    role: userData.role
});

res.status(200).send({
    token,
});
} catch (err) {
res.status(400).send({
    message: err.message,
});
}
};
```

*c. Faça a alteração do segundo endpoint*
**RESPOSTA:**
```
export const loginEndingPoint = async (req: Request, res: Response) => {
try {

const userData = {
    email: req.body.email,
    password: req.body.password,
};

function validateEmail( email : string ) : boolean {
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const validation = regexp.test(email);

    return validation
}

const isEmail = validateEmail(userData.email)
if( !isEmail ) {
        throw new Error("Email inválido!")
}

const userDatabase = new UserDatabase();
const user = await userDatabase.getUserByEmail(userData.email);

const hashManager = new HashManager();
const hashCompare = await hashManager.compare(userData.password, user.password);
if (!hashCompare) {
    throw new Error("Invalid password");
}

const authenticator = new Authenticator();
const token = authenticator.generateToken({
    id: user.id,
    role: user.role
});

res.status(200).send({
    token,
});
} catch (err) {
res.status(400).send({
    message: err.message,
});
}

await BaseDatabase.destroyConnection();
};
```


*d. No exercício de ontem, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.*
**RESPOSTA:**
Não, pois a ativação do ending point e a correlação dele com a base de dados se dá pelo token e id - duas propriedades que não sofreram alterações pela implementação da criptografia.


### EXERCÍCIO 3
*a. Altere a sua tabela de usuários para ela possuir uma coluna `role`. Considere que pode assumir os valores `normal`  e `admin`. Coloque `normal` como valor padrão.*
**RESPOSTA:**
Tinha feito essa implementação antes do exercício e, por isso,  a tabela ficou assim:

```
CREATE TABLE users_terca(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role ENUM("admin", "comum", "privilegiado") DEFAULT("usuario")
    );
```

*b. Altere a interface `AuthenticationData` e `Authenticator` para representarem esse novo tipo no token.*
**RESPOSTA:**
```
export class Authenticator {
  private static EXPIRES_IN = "1d";
  public generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
      {
     	id: input.id,
       	role: input.role
      },
      process.env.JWT_KEY as string,
      {
       	expiresIn: Authenticator.EXPIRES_IN,
      }
    );
    return token;
  }

  public getData(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      role: payload.role
    };
    return result;
  }
}

interface AuthenticationData {
  id: string;
  role: string
}
```

c. *Altere o cadastro para receber o tipo do usuário e criar o token com essa informação*
**RESPOSTA:**
BODY
{
    "name": "HellScream",
    "email": "axe@gmail.com",
    "password": "1234567",
    "role": "admin"
}

d*. Altere o login para crair o token com o `role` do usuário*
**RESPOSTA:**
```
const isEmail = validateEmail(userData.email)
if( !isEmail ) {
        throw new Error("Email inválido!")
}

const userDatabase = new UserDatabase();
const user = await userDatabase.getUserByEmail(userData.email);

const hashManager = new HashManager();
const hashCompare = await hashManager.compare(userData.password, user.password);
if (!hashCompare) {
    throw new Error("Invalid password");
}

const authenticator = new Authenticator();
const token = authenticator.generateToken({
    id: user.id,
    role: user.role
});
```


### EXERCÍCIO 4
*a. Altere o endpoint para que retorne um erro de Unauthorized para os usuários que "não sejam normais" e tentem acessar esse endpoint*

```
export const getUserProfileEndingPoint = async (
request : Request,
response : Response
) => {
try{
const token = request.headers.authorization as string
const authenticator = new Authenticator()
const authenticationData = authenticator.getData( token )
if( authenticationData.role !== "comum") {
  throw new Error("Ação não autorizada!")
}

const dataBase = new UserDatabase()
const userProfile = await dataBase.getUserById( authenticationData.id )


response
  .status(200)
  .send( userProfile )
} catch(error){
response
  .status(400)
  .send({
    message: error.message
  })
}}
```


### EXERCICIO 5
Implemente o endpoint que realizará a deleção de um usuário. As especificações são:
- *Verbo/Método*: **DELETE**
- *Path:* `user/:id`
- Somente admins podem acessar esse endpoint

**RESPOSTA:**
```
export const deleteUserEndingPoint = async (
request: Request, 
response: Response
) => {

try{
const id = request.params.id;
const token = request.headers.authorization as string;
const verifiedToken = new Authenticator().getData(token);
console.log(verifiedToken, id)

if(verifiedToken.role === "admin"){
  const userDatabase = new UserDatabase();
  await userDatabase.deleteUser(id);
  response.status(200).send({message: "Usuário apagado com sucesso"});

}else{
  response.status(401).send({
    message: "Você não está autorizado a fazer isso"
  });
}

}catch(err){
response.status(400).send({
  message: err.message,
});

}
await BaseDatabase.destroyConnection();
};
```


### EXERCICIO 6
Implemente o endpoint que retorne as informações (id e email) de um usuário a partir do seu id. As especificações são:

- *Verbo/Método*: **GET**
- *Path:* `/user/:id`
- Tanto admins como usuários normais conseguem usar essa funcionalidade

**RESPOSTA:**
```
export const getUserByIdEndingPoint = async (request: Request, res: Response) => {
    try {

      const token = request.headers.token as string;
      const id = request.params.id
  
      const authenticator = new Authenticator();
      const authenticationData = authenticator.getData(token);
  
      const userDb = new UserDatabase();
      if(authenticationData.role === "admin" || authenticationData.role === "comum" ){
  
        const user = await userDb.getUserById(id);
        
        res.status(200).send({
          id: user.id,
          email: user.email,
        });
      }
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  
    await BaseDatabase.destroyConnection();
  };
```


### EXERCÍCIO 7
*a. Implemente essa classe e faça com que o `UserDatabase` a implemente. Faça todas as alterações necessárias nessa classe.*
*b. Utilize o método `destroyConnection` nos momentos oportunos (vulgo, no final dos endpoints)*
**RESPOSTAS:**

```
export class BaseDatabase {

private static connection : Knex | null = null;

protected getConnection() : Knex {
if(!BaseDatabase.connection){
    BaseDatabase.connection = knex({
       client: "mysql",
       connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
       user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
},
});        
}

return BaseDatabase.connection;
}

public static async destroyConnection() : Promise<void>{
if(BaseDatabase.connection){
    await BaseDatabase.connection.destroy();
    BaseDatabase.connection = null;
}}}
```






