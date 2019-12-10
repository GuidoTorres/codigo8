import { mascota_router } from './../routes/mascotas';
import { duenio_router } from './../routes/duenio';
import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';

export class Servidor{

    public app : express.Application;
    public port :number;
    constructor(){

        // Inicializo app para que se a una instancia de la clase express
        this.app = express(),
        // Inicializo el puerto
        this .port = 3000
        // Inicializo mi body parser para especificar que tipo de datos tengo que capturar en el body
        this.app.use(bodyParser.json())
        // Sirve para leer la infomracion mandada por los forms
        this.app.use(bodyParser.urlencoded({extended:true}))
        this.configurarRutas();
    }
    configurarRutas(){

        this.app.use('/api', duenio_router, mascota_router)


    }

    start(){

        this.app.listen(this.port, () =>{ console.log("Servidor corriendo en el puerto: " + this.port)})

    }
}


