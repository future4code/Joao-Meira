import { Request, Response, NextFunction } from 'express'
import { CustomError } from '../errors/CustomError'

export default function errorCatcher (
    error : Error,
    request : Request,
    response : Response,
    next : NextFunction
) {
    if(error instanceof CustomError){
        return response
                .status(error.code)
                .send({ message: error.message })
    } else {
        console.log(error)
        return response
                .status(400)
                .send({ message: "Sua requisição não foi processada." })
    }
}