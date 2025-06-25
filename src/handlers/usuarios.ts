import {Request,Response} from "express"

export const getUsuarios = async(request:Request,response:Response)=>{
    response.json('Listar usuarios')
}