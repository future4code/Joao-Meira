import { Request, Response } from "express";
import { 
    getUserById,
    getTask,
    getAllUsers,
    getUserTasks,
    searchUser
} from "./queries";

export const getUserEndingPoint = async (    
    request : Request,
    response : Response
    ) => {
        try{
            const id = request.params.id;
            const user = await getUserById(id)
            if(user){
                response.status(200).send( user )
            } else {
                response.status(400).send({ error: "tarefa não encontrada!" })
            }        
        } catch(error){
            response.status(400).send({ error: error.message })
        }
}

export const getAllUsersEndingPoint = async (    
    request : Request,
    response : Response
    ) => {
        try{
            const users = await getAllUsers()
            if(users){
                response.status(200).send( users )
            } else {
                response.status(400).send({ error: "Não há usuários cadastrados!" })
            }        
        } catch(error){
            response.status(400).send({ error: error.message })
        }
}

export const getTaskEndingPoint = async (
    request : Request,
    response : Response
) => {
    try{
        const id = request.params.id;
        const task = await getTask(id)
        if(task){
            response.status(200).send( task )
        } else {
            response.status(400).send({ error: "Tarefa não encontrada!" })
        }
    } catch(error){
        response.status(400).send({ error: error.message })
    }
}

export const getUserTasksEndingPoint = async (
    request : Request,
    response : Response
) => {
    try{
        const userId = request.query.userId
        const tasks = await getUserTasks(userId)
        if(tasks && userId){
            response.status(200).send( tasks )
        } else {
            response.status(400).send({ 
                error: "Não existem tarefas para esse usuário!" 
            })
        }
    } catch(error){
        response.status(400).send({ error: error.message })
    }
}

export const searchUserEndingPoint = async (
    request : Request,
    response : Response
) => {
    try{
        const query = request.query.query
        const user = await searchUser(query)
        if(user && query){
            response.status(200).send({ users: user})
        } else {
            response.status(200).send([])

        }
    } catch(error){
        response.status(400).send({ error: error.message })
    }
}