import { Request, Response } from "express";
import { UserDatabase } from '../Classes/UserDataBase'

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