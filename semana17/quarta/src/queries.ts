import { connection } from './dotenv'

export const getActorByIdBuild = async (id: string) : Promise<any> => {
    try{
        const response = await connection.raw(`
        SELECT * FROM Actor WHERE id = '${id}'
      `)
      console.log( response[0][0] )
      return(response[0][0])
    } catch (error) {
        console.error(error)
    }
}

export const getActorByNameBuild = async (name: string) : Promise<any> => {
    try{
        const response = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
      `)
      console.log( response[0][0] )
      return(response[0][0])
    } catch (error) {
        console.error(error)
    }
}

export const genderCountBuild = async (gender: string) : Promise<any> => {
    try{
        const response = await connection.raw(`
        SELECT COUNT(*), gender
        FROM Actor
        WHERE gender = "${gender}"
        GROUP BY gender;
      `)
      console.log( response[0][0] )
      return(response[0][0])
    } catch (error) {
        console.error(error)
    }
}

export const updateSalaryBuild = async (
    id : string,
    salary : number 
    ) : Promise<any> => {
    try{
        await connection.raw(`
        UPDATE Actor
        SET salary = ${salary}
        WHERE id = '${id}';
      `)
      console.log( `Salário atualizado para R$${salary.toFixed(2)}!` )
    } catch (error) {
        console.error(error)
    }
}

export const deleteActorBuild = async (
    id : string
    ) : Promise<any> => {
    try{
        await connection.raw(`
        DELETE FROM Actor
        WHERE id = '${id}';
      `)
      console.log( `Ator deletado!` )
    } catch (error) {
        console.error(error)
    }
}

export const avgGenderSalaryBuild = async (
    gender : string
    ) : Promise<any> => {
    try{
        const response = await connection.raw(`
        SELECT AVG(salary) 
        FROM Actor
        WHERE gender = '${gender}';
      `)
      console.log( response[0][0] )
      return(response[0][0])
    } catch (error) {
        console.error(error)
    }
}

