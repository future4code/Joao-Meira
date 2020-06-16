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

        const validateEmail = dataBase.validateEmail(newUser.email)
        if( !validateEmail ) {
            throw new Error("Email inválido!")
        }

        const validatePassword = dataBase.validatePassword(newUser.password)
        if( !validatePassword ) {
            throw new Error("A senha deve ter mais de 6 caracteres!")
        }

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