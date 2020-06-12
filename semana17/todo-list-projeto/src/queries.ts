import { connection } from './dotenv'

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
        console.log(error)
    }
}

export const getTask = async (
    id : string
) => {
    try{
        const response = await connection.raw(`
            SELECT * FROM task_todo_list
            WHERE id = "${id}";
        `)
        return response[0][0]
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