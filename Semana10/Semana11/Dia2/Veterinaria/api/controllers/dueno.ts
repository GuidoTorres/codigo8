import {Response, Request} from 'express';


let duenios = [
    {
        id:1,
        nombre: "Guido",
        apellido: "Torres",
        dni: 72798529,
        telefono: 200668,
        correo: "gt12930@gmail.com",
        nacionalidad: "peruano"
    },  
]
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


export var duenio_controller = {

    traertodos: (req:Request, res:Response) =>{

        let {dni_duenio} = req.params;
        

        let duenioEncontrado=duenios.find(duenio=>{

            return duenio.dni == +dni_duenio
        })

        if(duenioEncontrado){

            res.status(200).json({
                message:'ok',
                content: duenioEncontrado
            });
        }else{

            res.status(404).json({
                message:'Error',
                content: `No se encontro el dni ${dni_duenio}`
            });

        }

       
        

    },

    agregarDuenio:(req:Request, res: Response) =>{

        let objDuenio = req.body;

        duenios.push(objDuenio);

        res.status(201).json({
            message: "Dueño agregado con exito",
            content: duenios
        })
    },

    modificarDuenio:(req:Request, res: Response) =>{

        let {dni_duenio} = req.params;
        let objDuenio = req.body;

        let duenioEncontrado=duenios.find(duenio=>{

            return duenio.dni == +dni_duenio
        })
        if(duenioEncontrado){

            duenioEncontrado.apellido = objDuenio.apellido;
            duenioEncontrado.nombre = objDuenio.nombre;
            duenioEncontrado.dni = objDuenio.dni;
            duenioEncontrado.telefono = objDuenio.telefono;
            duenioEncontrado.correo = objDuenio.correo;
            duenioEncontrado.nacionalidad = objDuenio.nacionalidad;
            res.status(200).json({
                message:'Dueño actualizado con exito',
                content: duenioEncontrado
            });
        }else{

            res.status(404).json({
                message:'Error',
                content: `No se encontro el dni ${dni_duenio} ingresado`
            });

        }

    },
    eliminarDuenio:(req:Request, res:Response)=>{
        let {dni_duenio}= req.params;
        duenios = duenios.filter(duenio =>{return duenio.dni != +dni_duenio})
        res.status(200).json({
            message:'ok',
            contente: 'Dueño eliminada con exito'
        });
    }

}