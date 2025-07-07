import {Request,Response} from "express"

export const getUsuario = async(request:Request,response:Response)=>{
    response.json('Listar usuarios')
}

export const loginUsuario = async(request:Request,response:Response)=>{
    response.json('Iniciar sesión de usuario')
}

export const cerrarSesionUsuario = async(request:Request,response:Response)=>{
    response.json('Cerrar sesión de usuario')
}
export const registrarUsuario = async(request:Request,response:Response)=>{
    response.json('Registrar nuevo usuario')
}
export const cambiarContrasena = async(request:Request,response:Response)=>{
    response.json('Cambiar contraseña de usuario')
}
