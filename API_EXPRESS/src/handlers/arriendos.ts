import {Request,Response} from "express"
import Arriendo from '../models/arriendo'

export const getArriendos = async(request:Request,response:Response)=>{
    //response.json('Listar arriendos')
    const arriendos = await Arriendo.findAll({ order: [['id', 'ASC']]})
    response.json({data: arriendos})
} 

export const getArriendoById = async(request:Request,response:Response)=>{
    const {id}=request.params
    const arriendo = await Arriendo.findByPk(id)
    if (!arriendo) {
        response.json({ message: 'Arriendo no encontrado', data: null });
        return;
    }
    response.json({data: arriendo});
}
export const getArriendosConCantidad = async(request:Request,response:Response)=>{
    //response.json('Listar arriendos con cantidad')
    const tipos = ["Sedán", "SUV", "Camioneta"]
    const resultados: any = {}
    for (const tipo of tipos) {
        resultados[tipo] = await Arriendo.count({ where: { tipo_vehiculo: tipo } })
    }    
    response.json({data: resultados})
}

export const crearArriendo = async (request: Request, response: Response) => {
    const { patente_vehiculo, tipo_vehiculo, rut_cliente, nombre_cliente } = request.body;
    if (!patente_vehiculo || !tipo_vehiculo || !rut_cliente || !nombre_cliente) {
        response.json({ error: 'Faltan datos requeridos' });
        return;
    }
    if (!['Sedán', 'SUV', 'Camioneta'].includes(tipo_vehiculo)) {
        response.json({ error: 'Tipo de vehículo inválido' });
        return;
    }
    const nuevoArriendo = await Arriendo.create({
        fecha_inicio: new Date(),
        fecha_fin: null,
        patente_vehiculo,
        tipo_vehiculo,
        rut_cliente,
        nombre_cliente
    });
    response.json({ data: nuevoArriendo });
}
export const registrarDevolucion = async(request:Request,response:Response)=>{
    const {id}=request.params
    const arriendo = await Arriendo.findByPk(id)
    if (!arriendo) {
        response.json({ error: 'Arriendo no encontrado', data: null });
        return;
    }
    arriendo.fecha_fin = new Date()
    await arriendo.save()
    response.json({data: arriendo});
}
export const eliminarArriendo = async (request: Request, response: Response) => {
    const { id } = request.params;
    const arriendo = await Arriendo.findByPk(id);
    if (!arriendo) {
        response.json({ message: 'Arriendo no encontrado', data: null });
        return;
    }
    await arriendo.destroy();
    response.json({ data: 'Arriendo borrado' });
}
export const getArriendosActivos = async(request:Request,response:Response)=>{
    //response.json('Listar arriendos activos')
    const arriendosActivos = await Arriendo.findAll({ where: { fecha_fin: null }})
    response.json({data: arriendosActivos})
}
export const getArriendosTerminados = async(request:Request,response:Response)=>{
    //response.json('Listar arriendos terminados')
    const arriendos = await Arriendo.findAll()
    const arriendosTerminados = arriendos.filter(a => a.fecha_fin !== null)
    response.json({data: arriendosTerminados})
}
