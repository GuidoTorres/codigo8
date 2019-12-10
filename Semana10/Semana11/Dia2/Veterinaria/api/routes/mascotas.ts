import { mascota_controller } from './../controllers/mascota';
import {Router} from 'express';
// Importo mi controlador con todo el comportamiento que voy a asignar a mis rutas

// Exporto una variable del tipo router
export var mascota_router = Router();

//aqui van las rutas de personas

mascota_router.get('/mascotas', mascota_controller.traertodos);

mascota_router.post('/masctoa', mascota_controller.agregarMascota);
mascota_router.put('/mascota/:id_mascota', mascota_controller.modificarMascota);

mascota_router.delete('/mascotas/:id_mascota', mascota_controller.eliminarMascota)