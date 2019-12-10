import {Response, Request, response} from 'express';
let personas = [
    {
        id:1,
        nombre: "Guido",
        apellido: "Torres",
        edad: 30,
        estado:"activo"
    }
]
export var persona_controller = {

    traertodos: (req:Request, res:Response) =>{

        res.status(200).json({
            message:"ok",
            content: personas
        })
        

    },

    agregarPersona:(req:Request, res: Response) =>{

        let objPersona = req.body;

        personas.push(objPersona);

        res.status(201).json({
            message: "Persona agregada con exito",
            content: personas
        })
    },

    modificarPersona:(req:Request, res: Response) =>{

        let {id_persona} = req.params;
        let objPersona = req.body;

        let personaEncontrada=personas.find(persona=>{

            return persona.id == +id_persona
        })
        if(personaEncontrada){

            personaEncontrada.apellido = objPersona.apellido;
            personaEncontrada.nombre = objPersona.nombre;
            personaEncontrada.estado = objPersona.estado;
            personaEncontrada.edad = objPersona.edad;
            res.status(200).json({
                message:'Persona actualizada con exito',
                content: personaEncontrada
            });
        }else{

            res.status(404).json({
                message:'Error',
                content: `No se encontro le id ${id_persona} ingresado`
            });

        }

    },
    eliminarPersona:(req:Request, res:Response)=>{
        let {id_persona}= req.params;
        personas = personas.filter(persona =>{return persona.id != +id_persona})
        res.status(200).json({
            message:'ok',
            contente: 'Persona eliminada con exito'
        });
    }

}