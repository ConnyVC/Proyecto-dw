import { Router } from 'express'
import { cambiarContrasena, cerrarSesionUsuario, getUsuario, loginUsuario, registrarUsuario } from './handlers/usuarios'
import { crearArriendo, getArriendoById, getArriendos, getArriendosConCantidad, registrarDevolucion, getArriendosActivos, getArriendosTerminados, eliminarArriendo } from './handlers/arriendos'


const router = Router()


//End points usuarios
router.get('/usuarios',getUsuario)
router.post('/login', loginUsuario)
router.post('/logout', cerrarSesionUsuario)
router.post('/usuarios', registrarUsuario)
router.put('/usuarios', cambiarContrasena)
//End points arriendos
router.get('/arriendos',getArriendos)
router.get('/arriendos/:id',getArriendoById)
router.get('/arriendos/con-cantidad',getArriendosConCantidad)
router.get('/arriendos/activos', getArriendosActivos)
router.get('/arriendos/terminados', getArriendosTerminados)
router.post('/arriendos', crearArriendo)
router.put('/arriendos/:id/devolucion', registrarDevolucion)
router.delete('/arriendos/:id', eliminarArriendo)     



export default router