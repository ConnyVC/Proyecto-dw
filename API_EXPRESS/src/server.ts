import Express from 'express'
import router from './router'
import db from './config/database'
import cors, { CorsOptions } from 'cors'

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

const corsOptions: CorsOptions = {
    origin: function(origin, callback) {
        if (!origin ||origin === process.env.FRONTEND_URL) {
            // Permitir solicitudes sin origen (como desde Postman)
            callback(null, true);
        } else {
            // denegar solicitudes de otros orígenes
            callback(new Error('error de cors'), false);
        }
    }
}
server.use(cors(corsOptions)) //Permite recibir solicitudes de otros dominios

server.use(Express.json()) //Permite recibir datos en formato JSON

//Todos los request que comiencen con /api se deben derivar a router.ts
server.use('/api', router)


export default server