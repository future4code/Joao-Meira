import { Request, Response } from "express";
import { 
    editUser,
} from "./queries";

export const editUserEndingPoint = async (
    request : Request,
    response : Response
) => {
    try{
        const changes = {
            id: request.body.id,
            name: request.body.name,
            nickname: request.body.nickname,
            email: request.body.email
        }
        const requisition = await editUser(
            changes.id,
            changes.name,
            changes.nickname,
            changes.email
        )
        if(
            requisition &&
            changes.id &&
            changes.name &&
            changes.nickname &&
            changes.email
            ){
            response.status(200).send( {message: "Informações atualizadas!"} )
        } else {
            return response.status(400).send({ error: "Informações incorretas." })
        }
    } catch(error){
        response.status(400).send({ error: error.message })
    }
}
