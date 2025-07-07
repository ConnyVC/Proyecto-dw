import { array, number, object, string, type InferOutput } from "valibot"

export const CategoriaConCantidadProductosSchema = object({
    id:number(),
    nombre:string(),
    cantidadProductos:number(),

})

export const CategoriasConCantidadProductosSchema = array(CategoriaConCantidadProductosSchema)

//types

export type CategoriaConCantidadProductos = InferOutput<typeof CategoriaConCantidadProductosSchema>