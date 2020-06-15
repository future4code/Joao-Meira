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