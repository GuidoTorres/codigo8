import { duenio_controller } from './../controllers/dueno';
import {Router} from 'express';
// Importo mi controlador con todo el comportamiento que voy a asignar a mis rutas

// Exporto una variable del tipo router
export var duenio_router = Router();

//aqui van las rutas de personas

duenio_router.get('/duenios/:dni_duenio', duenio_controller.traertodos);

duenio_router.post('/duenio', duenio_controller.agregarDuenio);
duenio_router.put('/duenio/:dni_duenio', duenio_controller.modificarDuenio);

duenio_router.delete('/duenios/:dni_duenio', duenio_controller.eliminarDuenio)