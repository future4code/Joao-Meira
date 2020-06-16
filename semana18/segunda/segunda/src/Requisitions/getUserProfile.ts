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