import axios from "axios"
import { safeParse } from "valibot"
import { CategoriasConCantidadProductosSchema } from "../types/categoria"

export async function getCategoriasConCantidadDeProductos() {
    try{
        const url ="http://localhost:3000/api/categorias/con-cantidad-productos"
        const {data} = await axios.get(url);
        const resultado=safeParse(CategoriasConCantidadProductosSchema,categorias.data)
        if(resultado.success){
            return resultado.output
        }else{
            throw new Error('Hubo un problema al pedir Datos :(')
        }
    }catch(error){
        console.log(error)
    }
}