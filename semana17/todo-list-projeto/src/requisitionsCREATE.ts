import { Request, Response } from "express";
import { 
    createUser,
    createTask,
    createBind,
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
        let requisition
        if(
            task.status === "to_do" ||
            task.status === "doing" ||
            task.status === "done"
            ){
                requisition = await createTask(
                    task.title,
                    task.description,
                    task.status,
                    task.limit_date,
                    task.creator_id
                )
            } else {
                requisition = false
            }

        if(requisition){
            response.status(200).send( {message: "Tarefa criada!"} )
        } else {
            return response.status(400).send({ 
                error: "Dados da tarefa incorretos." 
            })
        }    } catch(error){
        response.status(400).send({ error: error.message })
    }
}

export const bindToTaskEndingPoint = async (
    request : Request,
    response : Response
) => {
    try{
        const bind = {
            user_id: request.body.user_id,
            task_id: request.body.task_id
        }
        let requisition
        if(
            bind.user_id,
            bind.task_id
            ){
                requisition = await createBind( 
                    bind.user_id,
                    bind.task_id
                    )
                    
            } else {
                requisition = false
            }
        if(requisition){
            response.status(200).send( {message: `Tarefa atribuída!`} )
        } else {
            return response.status(400).send({ 
                error: "Ops! Parece que alguma informação está incorreta!" 
            })
        }    } catch(error){
        response.status(400).send({ error: error.message })
    }
}

