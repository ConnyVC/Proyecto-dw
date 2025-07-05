import {Request,Response} from "express"

export const getArriendos = async(request:Request,response:Response)=>{
    response.json('Listar arriendos')
}

export const getArriendoById = async(request:Request,response:Response)=>{
    const {id}=request.params
    response.json('listar categoria: '+id)

}
