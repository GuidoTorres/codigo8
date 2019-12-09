import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
//Creadno una instancia de Express
//app => es el servidor web
let app = express()
let port = 3000

//Sirve para recibir peticiones con el protocolo 'aplication/json'
app.use(bodyParser.json())


let personas = [
    {
        id:1,
        nombre: "Guido",
        apellido: "Torres",
        edad: 28,
        estado:"activo"
    }
]



app.get('/personas', (req, res) => { 

    //para recibir los parametros, se usa el objeto req.params
    let objpersonas = req.params;
    
    
    res.json({
        ok: true,
        mensaje: personas });
    })
//Recibir parametros por el body
app.post('/persona', (req, res) => { 

    //para obtener los parametrso enviados por el body se accede al obj [req.body]
    let arreglo = req.body;

    res.json({
        ok: true,
        mensaje: personas, arreglo 
    })})


    app.put('/persona/:id', (req, res) => { 

        //para obtener los parametrso enviados por el body se accede al obj [req.body]
        let objPersona = req.body;
        console.log(objPersona);
        res.json({
            ok: true,
            mensaje: objPersona
        });})

app.delete('/persona/:id', (req, res) => { 

            //para obtener los parametrso enviados por el body se accede al obj [req.body]
            let objPersona = req.body;
            console.log(objPersona);
            res.json({
                ok: true,
                mensaje: objPersona
            })})
    


app.listen(port, () =>{ console.log("Servidor corriendo correctamente en el puerto: " + port)})