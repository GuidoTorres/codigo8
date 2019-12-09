import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
//Creadno una instancia de Express
//app => es el servidor web
let app = express()
let port = 3000

//Sirve para recibir peticiones con el protocolo 'aplication/json'
app.use(bodyParser.json())

//funcion get()
//1. especifica la ruta y el verbo get
//2. Callback que recibe 2 parametros
//2.1 Req(Request), Tiene informacion de la solucitud del cliente
//2.2 Res(Response), Objeto que maneja la informacion para la respuesta al cliente

app.get('/', (req, res) => { res.json({mensaje: "REspuesta correcta del servidor"}); });


app.post('/usuarios', (req, res) => { res.json({mensaje: "Usuario creado con exito"}); });

//Recibir parametros por la url
app.get('/usuario/:id_usuario', (req, res) => { 

    //para recibir los parametros, se usa el objeto req.params
    let id = req.params.id_usuario;
    
    
    res.json({
        ok: true,
        mensaje: `El id recibido es ${id}`}); });

//Recibir parametros por el body
app.post('/usuario/ingresar', (req, res) => { 

    //para obtener los parametrso enviados por el body se accede al obj [req.body]
    let objPersona = req.body;
    console.log(objPersona);
    res.json({
        ok: true,
        mensaje: objPersona
    })})
    

    // res.setHeader('Content-Type', 'text/plain')
    // res.write('Mandaste por el body:\n')
    // res.end(JSON.stringify(req.body, null, 2))});


//Levantar el servidor
app.listen(port, () =>{ console.log("Servidor corriendo correctamente en el puerto: " + port)})