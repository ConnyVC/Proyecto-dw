import {Request,Response} from "express"

export const getArriendos = async(request:Request,response:Response)=>{
    response.json('Listar arriendos')
}

export const getArriendoById = async(request:Request,response:Response)=>{
    const {id}=request.params
    response.json('listar arriendo: '+id)

}
export const getArriendosConCantidad = async(request:Request,response:Response)=>{
    response.json('Listar arriendos con cantidad')
}

export const crearArriendo = async(request:Request,response:Response)=>{
    response.json('Crear arriendo')
}
export const registrarDevolucion = async(request:Request,response:Response)=>{
    const {id}=request.params
    response.json('Registrar devolucion del arriendo: '+id)
}
export const eliminarArriendo = async(request:Request,response:Response)=>{
    const {id}=request.params
    response.json('Eliminar arriendo: '+id)
}
export const getArriendosActivos = async(request:Request,response:Response)=>{
    response.json('Listar arriendos activos')
}
export const getArriendosTerminados = async(request:Request,response:Response)=>{
    response.json('Listar arriendos terminados')
}
