import {Response, Request} from 'express';

let mascotas = [
    {
        id:1,
        nombre: "Killer",
        raza: "Pastor Aleman",
        tipo: "mediano",
        sexo: "macho",
        fechaNacimiento: "2019-12-10",
        colores: "varios"
    }
]
export var mascota_controller = {

    traertodos: (req:Request, res:Response) =>{

        res.status(200).json({
            message:"ok",
            content: mascotas
        })
        

    },

    agregarMascota:(req:Request, res: Response) =>{

        let objMascota = req.body;

        mascotas.push(objMascota);

        res.status(201).json({
            message: "Mascota agregado con exito",
            content: mascotas
        })
    },

    modificarMascota:(req:Request, res: Response) =>{

        let {id_mascota} = req.params;
        let objMascota = req.body;

        let mascotaEncontrado=mascotas.find(mascota=>{

            return mascota.id == +id_mascota
        })
        if(mascotaEncontrado){

            mascotaEncontrado.nombre = objMascota.apellido;
            mascotaEncontrado.raza = objMascota.nombre;
            mascotaEncontrado.tipo = objMascota.dni;
            mascotaEncontrado.sexo = objMascota.telefono;
            mascotaEncontrado.fechaNacimiento = objMascota.correo;
            mascotaEncontrado.colores = objMascota.nacionalidad;
            res.status(200).json({
                message:'Mascota actualizada con exito',
                content: mascotaEncontrado
            });
        }else{

            res.status(404).json({
                message:'Error',
                content: `No se encontro el id ${id_mascota} ingresado`
            });

        }

    },
    eliminarMascota:(req:Request, res:Response)=>{
        let {id_mascota}= req.params;
        mascotas = mascotas.filter(mascota =>{return mascota.id != +id_mascota})
        res.status(200).json({
            message:'ok',
            contente: 'Mascota eliminada con exito'
        });
    }

}