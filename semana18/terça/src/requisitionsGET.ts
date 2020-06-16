import { Request, Response } from "express";
import dotenv from "dotenv";
import { UserDatabase } from "./data/UserDatabase";
import { Authenticator } from "./services/Authenticator";
import { BaseDatabase } from "./data/BaseDatabase";

dotenv.config();

const authenticator = new Authenticator();

const userDataBase = new UserDatabase();


export const getUserByIdEndingPoint = async (
  request: Request, 
  response: Response
) => {
    try {

      const token = request.headers.token as string;
      const id = request.params.id
  
      const authenticationData = authenticator.getData(token);
  
      if(
        authenticationData.role === "admin" || 
        authenticationData.role === "comum" ||
        authenticationData.role === "privilegiado"
      ){
  
        const user = await userDataBase.getUserById(id);
        
        response.status(200).send({
          id: user.id,
          email: user.email,
        });
      }
    } catch (err) {
      response.status(400).send({
        message: err.message,
      });
    }
  
    await BaseDatabase.destroyConnection();
  };

export const getUserProfileEndingPoint = async (
    request : Request,
    response : Response
) => {
    try{
        const token = request.headers.authorization as string

        const authenticationData = authenticator.getData( token )
        if( authenticationData.role !== "comum") {
          throw new Error("Ação não autorizada!")
        }

        const userProfile = await userDataBase.getUserById( authenticationData.id )

        response
          .status(200)
          .send( userProfile )
    } catch(error){
        response
          .status(400)
          .send({
            message: error.message
          })
    }
    await BaseDatabase.destroyConnection();
}
  