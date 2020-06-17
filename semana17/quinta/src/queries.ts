import { connection } from './dotenv'

function idGenerator() : number {return Date.now()}

export const postCommentAndRating = async ( comment : string, rating : number, movieId : string ) : Promise<any> => {
    try{
        await connection.raw(`
        INSERT INTO Movies_Rating
            VALUES
            ( "${idGenerator()}", "${comment}", ${rating}, "${movieId}")
        `)
      console.log( "Comentário postado!" )
    } catch (error) {
        console.error(error)
    }
}

export const addCast = async ( actorId : string,  movieId : string ) : Promise<any> => {
    try{
        await connection.raw(`
        INSERT INTO MovieCast
            VALUES
            ( "${actorId}", "${movieId}")
        `)
      console.log( `Atriz/Ator adicionado!` )
    } catch (error) {
        console.error(error)
    }
}

export const getRatings = async () : Promise<any> => {
    try{
        const response = await connection.raw(`
        SELECT m.id as movie_id, m.title as movie_title, r.rate as rating, r.comment as comment
        FROM Movies m
        LEFT JOIN Movies_Rating r ON m.id = r.movie_id;
      `)
      console.log( response[0] )
      return(response[0])
    } catch (error) {
        console.error(error)
    }
}

export const getCast = async () : Promise<any> => {
    try{
        const response = await connection.raw(`
        SELECT m.id as movie_id, m.title as movie_title, c.actor_id
        FROM Movies m
        LEFT JOIN MovieCast c 
        ON m.id = c.movie_id;
      `)
      console.log( response[0] )
      return(response[0])
    } catch (error) {
        console.error(error)
    }
}

export const getAverageRating = async () : Promise<any> => {
    try{
        const response = await connection.raw(`
        SELECT AVG (rate) as average_rating, movie_id
        FROM Movies_Rating 
        GROUP BY movie_id
      `)
      console.log( response[0] )
      return(response[0])
    } catch (error) {
        console.error(error)
    }
}

export const getCastByTitle = async () : Promise<any> => {
    try{
        const response = await connection.raw(`
        SELECT m.id as movie_id, m.title as movie_title,mc.actor_id as actor_id, a.name as actor_name
        FROM Movies m
        LEFT JOIN MovieCast mc ON m.id = mc.movie_id
        LEFT JOIN Actor a ON a.id = mc.actor_id;
      `)
      console.log( response[0] )
      return(response[0])
    } catch (error) {
        console.error(error)
    }
}

export const getFullInfo = async () : Promise<any> => {
    try{
        const response = await connection.raw(`
        SELECT 
            m.id as movie_id, 
            m.title as movie_title,
            mc.actor_id as actor_id, 
            a.name as actor_name,
            mr.rate as rating,
            mr.comment as comment
        FROM Movies m
        LEFT JOIN MovieCast mc 
            ON m.id = mc.movie_id
        LEFT JOIN Actor a 
            ON a.id = mc.actor_id
        LEFT JOIN Movies_Rating mr 
            ON m.id = mr.movie_id
      ;`)
      console.log( response[0] )
      return(response[0])
    } catch (error) {
        console.error(error)
    }
}


