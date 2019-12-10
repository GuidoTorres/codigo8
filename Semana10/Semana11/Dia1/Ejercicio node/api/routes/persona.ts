import { persona_controller } from './../controllers/persona';
import {Router} from 'express';
// Importo mi controlador con todo el comportamiento que voy a asignar a mis rutas

// Exporto una variable del tipo router
export var persona_router = Router();

//aqui van las rutas de personas

persona_router.get('/personas', persona_controller.traertodos);

persona_router.post('/persona', persona_controller.agregarPersona);
persona_router.put('/persona/:id_persona', persona_controller.modificarPersona);

persona_router.delete('/personas/:id_persona', persona_controller.eliminarPersona)