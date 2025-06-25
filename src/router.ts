import { Router } from 'express'
import { getUsuarios } from './handlers/usuarios'
import { getArriendoById, getArriendos } from './handlers/arriendos'


const router = Router()


//End points usuarios
router.get('/usuarios',getUsuarios)

//End points arriendos
router.get('/arriendos',getArriendos)
router.get('/arriendos/:id',getArriendoById)

export default router