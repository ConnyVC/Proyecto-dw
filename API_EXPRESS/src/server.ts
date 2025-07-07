import Express from 'express'
import router from './router'
import db from './config/database'

const server = Express()

//CONEXION A BD
async function conectarBD(){
    try {
        await db.authenticate()
        db.sync()
        console.log('CONECTADOS!!!!!!')
    } catch (error) {
        console.log('Error al conectar a la base de datos:')
        console.log(error)
    }
}

conectarBD()


//Todos los request que comiencen con /api se deben derivar a router.ts
server.use('/api', router)


export default server