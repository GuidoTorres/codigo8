import {comentarios} from './data.js';

// /**
//  * Funcion que busca en el arreglo de comentarios
//  * el comentario que tenga el id entregado y retorna
//  * el objeto comentario, si no encuentra el id
//  * retorna un on objeto de forma:
//  * 
//  * {
//  * Error: "No se encontro el comentario"
//  * }
//  * @param {number} id
//  * @returns objComentario 
//  */


// let buscarComentarioPorId = (id) => {

//    //SOlucion con for
//    for (let i = 0; i < comentarios.length; i++) {
       
//         if (id == comentarios[i].id){

//             return comentarios[i];

//         }
//         // else{
    
    //         //     return {error:"No se encontro el comentario"};
    //         // }
    //     }
    //     let rpta ={
        //         error: "no se encontro el comentario"
        //     }   
        //    return rpta
        // console.log(buscarComentarioPorId(6));
        
//SOLUCION CON FILTER
// comentarios.find((comentario) =>{
//     return id == comentario.id;
// });
// console.log(rpta);

// }

//SOlucion con FIND
// let rpta = comentarios.find((comment) => {

//     return comment.id = id;
// });

//typeof => obtiene el tipo de dato de un elemento
// if(typeof rpta == 'undefined'){
//     //significa que no se encontro el comentario
//     let mensaje = {error: 'No se encontro comentario'}
//     return mensaje;
// }else{

//     return rpta;
// }

//funcion que retorna todos los elementos cuyo correo 
// termina en .biz
// let getAllBiz = () =>{

//  let resultado = comentarios.filter((comment) => {

//     if (comment.email.endsWith(".biz")) {
        
//         return comment;
//     }
// });

// return resultado;
// }

// console.log(getAllBiz());


/**
 * Funcion que retorna un objeto con el email y el nombre
 * de los registros cuyo body contenga la palabra buscada en la
 * variable word
 */
let GetNameEmailByWordInBody = (word) =>{

    // let resultado = comentarios.filter((name) =>{ 

    // if(name.body.match("libero") ){
       
    //     return name;
        
    // }
    // });
   

    // return resultado;
   //Creando un arreglo vacio de resultados 
    let resultado = [];
    //Iterando el arreglo de comentatrios 
    comentarios.forEach((elemento)=> {
        //Preguntar si el texto de la variable 'word', existe
        //en algunas posicion de campo de body
        if (elemento.body.indexOf(word) != -1) {

            //si el elemento contiene la palabra buscada
            //creo un objeto temporal con su copia de los dos campos requeridos solamente
            let objTmp = {
                email: elemento.email,
                name: elemento.name
            };
            // agrego ese objeto temporal al arreglo resultado
            resultado.push(objTmp);
            
        }

    });

    //Terminado el ciclo foreach retorna el arreglo resultado
    return resultado;
}


console.log(GetNameEmailByWordInBody("error"));
