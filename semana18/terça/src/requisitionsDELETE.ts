import { Request, Response } from "express";
import dotenv from "dotenv";
import { UserDatabase } from "./data/UserDatabase";
import { Authenticator } from "./services/Authenticator";
import { BaseDatabase } from "./data/BaseDatabase";

dotenv.config();

const userDatabase = new UserDatabase();

export const deleteUserEndingPoint = async (
  request: Request, 
  response: Response
) => {

    try{
      const id = request.params.id;
      const token = request.headers.authorization as string;
      const verifiedToken = new Authenticator().getData(token);

      if(verifiedToken.role === "admin"){
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