import { Request, Response } from "express";
import { 
    createUser,
    createTask,
} from "./queries";


export const createUserEndingPoint = async ( 
    request : Request, 
    response : Response
    ) => {
    try {
        const user = {
            name: request.body.name,
            nickname: request.body.nickname,
            email: request.body.email
        }
        const requisition = await createUser(
            user.name,
            user.nickname,
            user.email
        )

        if(requisition){
            response.status(200).send( user )
        } else {
            response.status(400).send({ error: "Confira as informações de cadastro." })
        }          
    } catch(error) {
        response.status(400).send({ error: error.message })
    }
}

export const createTaskEndingPoint = async (
    request : Request,
    response : Response
) => {
    try{
        const task = {
            title: request.body.title,
            description: request.body.description,
            status: request.body.status,
            limit_date: request.body.limit_date,
            creator_id: request.body.creator_id
        }
       const requisition = await createTask(
            task.title,
            task.description,
            task.status,
            task.limit_date,
            task.creator_id
        )
        if(requisition){
            response.status(200).send( {message: "Tarefa criada!"} )
        } else {
            return response.status(400).send({ error: "Dados da tarefa incorretos." })
        }    } catch(error){
        response.status(400).send({ error: error.message })
    }
}

