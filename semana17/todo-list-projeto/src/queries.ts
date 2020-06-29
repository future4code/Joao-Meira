import { connection } from './dotenv'
import moment from 'moment'

export const createUser = async (
    name : string,
    nickname : string,
    email : string
    ) : Promise<any> => {
    try{
        const response = await connection.raw(`
            INSERT INTO user_todo_list
                VALUES (
                    "${Date.now()}",
                    "${name}",
                    "${nickname}",
                    "${email}"
            )
    `)
        if(response){
            return true
        } else return false
    } catch (error) {
        console.error(error)
    }
}

export const getUserById = async (
    id : string
) => {
    try{
        const response = await connection.raw(`
            SELECT * FROM user_todo_list
                WHERE id = "${id}";
        `)
        return response[0][0]
    } catch(error){
        console.error(error)
    }
}

export const getAllUsers = async () => {
    try{
        const response = await connection.raw(`
            SELECT * FROM user_todo_list
        `)
        return response[0]
    } catch(error){
        console.error(error)
    }
}

export const editUser = async (
    id : string,
    name : string,
    nickname : string,
    email : string
) => {
    try{
        const response = await connection.raw(`
        UPDATE user_todo_list
            SET
                name = "${name}",
                nickname = "${nickname}",
                email = "${email}"
            WHERE id = "${id}";
        `)
        if(response){
            return true
        } else return false
    } catch(error) {
        console.error(error)
    }
}

export const  createTask = async (
    title : string,
    description : string,
    status : any,
    limit_date : string,
    creator_id : string
) => {
    try{
        const response = await connection.raw(`
            INSERT INTO task_todo_list
                VALUES (
                    "${Date.now()}",
                    "${title}",
                    "${description}",
                    "${status}",
                    "${limit_date}",
                    "${creator_id}"
            )
        `)
        if(response){
            return true
        } else return false
    } catch(error) {
        console.error(error)
    }
}

export const getTask = async (
    id : string
) => {
    try{
        const task = await connection.raw(`
            SELECT 
                *
            FROM task_todo_list task
                WHERE task.id = "${id}"
        `);
        const responsibles = await connection.raw(`
            SELECT 
                responsible.responsible_id,
                user.nickname
            FROM task_todo_list task
                RIGHT JOIN task_responsible_todo_list responsible
                    ON task.id = responsible.task_id
                RIGHT JOIN user_todo_list user
                    ON responsible.responsible_id = user.id
                WHERE task.id = "${id}"
        `)
        if(task && responsibles){
            return ({
                id: task[0][0].id,
                title: task[0][0].title,
                description: task[0][0].description,
                status: task[0][0].status,
                limit_date: moment(task[0][0].limit_date).format('DD/MM/YYYY'),
                creator_id: task[0][0].creator_id,
                responsible_users: responsibles[0]
            })
        } else return false    
    } catch(error){
        console.error(error)
    }
}

export const getUserTasks = async (
    userId : any
    ) => {
    try{
        const response = await connection.raw(`
            SELECT * FROM task_todo_list
                WHERE creator_id = "${userId}"
        `)
        return response[0]
    } catch(error){
        console.error(error)
    }
}

export const searchUser = async (
    query : any
    ) => {
    try{
        const response = await connection.raw(`
            SELECT * FROM user_todo_list
                WHERE id = "${query}"
        `)
        return response[0]
    } catch(error){
        console.error(error)
    }
}

export const createBind = async (
        userId : string,
        taskId : string
    ) => {
    try{
        const response = await connection.raw(`
            INSERT INTO task_responsible_todo_list
                VALUES(
                    "${taskId}",
                    "${userId}"
            )
        `)
        if(response){
            return true
        } else return false
    } catch(error){
        console.error(error)
    }
}

export const getResponsible = async (
        taskId : string,
    ) => {
    try{
        const response = await connection.raw(`
            SELECT * FROM task_responsible_todo_list
                WHERE task_id = "${taskId}"
        `)
        console.log(response[0])
        if(response){
            return response[0]
        } else return false
    } catch(error){
        console.error(error)
    }
}