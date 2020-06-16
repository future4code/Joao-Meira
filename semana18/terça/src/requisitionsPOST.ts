import { Request, Response } from "express";
import dotenv from "dotenv";
import { IdGenerator } from "./services/IdGenerator";
import { UserDatabase } from "./data/UserDatabase";
import { Authenticator } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";
import { BaseDatabase } from "./data/BaseDatabase";

dotenv.config();

function validateEmail( email : string ) : boolean {
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const validation = regexp.test(email);

    return validation
}

const hashManager = new HashManager();

const userDatabase = new UserDatabase();

const authenticator = new Authenticator();


export const createUserEndingPoint = async (req: Request, res: Response) => {
    try {

        const userData = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        };

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
            
        const hashPassword = await hashManager.hash(userData.password);
    
        await userDatabase.createUser(
            idGenerator(), 
            userData.name, 
            userData.email, 
            hashPassword, 
            userData.role
            );
    
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
    await BaseDatabase.destroyConnection();
};
    

export const loginEndingPoint = async (req: Request, res: Response) => {
    try {

        const userData = {
            email: req.body.email,
            password: req.body.password,
        };

        const isEmail = validateEmail(userData.email)
        if( !isEmail ) {
                throw new Error("Email inválido!")
        }

        const user = await userDatabase.getUserByEmail(userData.email);

        const hashCompare = await hashManager.compare(userData.password, user.password);
        if (!hashCompare) {
            throw new Error("Senha inválida!");
        }

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
  