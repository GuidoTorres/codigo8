
// //Parte 1
// let variable = +prompt('Ingrese un valor');

// const miPromesa = new Promise((resuelto, rechazado) =>{

//     if (variable === 20) {
//         resuelto('La variable es igual a 20')
//     }else{
//         rechazado('La variable no es igual a 20')
//     }
// })


// miPromesa.then((respuesta)=>{
//     console.log(respuesta);
    
// }).catch((error)=>{
//     console.log(error);
    
// })


//Parte 2

//  let variable2 = 50
// console.log('1. se inicio el proceso');
// setTimeout(() => {
    
//     variable = variable2 *3;

// console.log('2. Proceso Terminado ...');
// console.log(variable);

// }, 2000);

// console.log('3. El resultado es :' + variable2)

// PARTE 3
// let variable2 = 50


// const promesa = new Promise((resolve, reject) =>{

//     setTimeout(() => {
    
//         variable2 = variable2 *3;
    
//     console.log('2. Proceso Terminado ...');
//     resolve(variable2);
    
//     }, 2000);
// })

// console.log('1. proceso inicializado ...');
// promesa.then((res =>{
//     console.log('3. El resultado es: ' +res);
    
// }))


// Parte 4

// let usuarios = [
//     {
//         id: 1,
//         nombre: "Guido",

//     },
//     {
//         id:2,
//         nombre: "Tu papi"
//     }

// ]

// let direcciones = [

//     {
//         id: 1,
//         direccion: 'Mayta Capac 125'
//     },
//     {
//         id: 2,
//         direccion: 'Yura 512'
//     }
// ]

// const obtenerUsuario = id =>{

//     return new Promise((resolve,reject)=>{

//         if(usuarios.find(usuarios => usuarios.id === id)){

//             console.log(usuarios.find(usuario => usuario.id === id));
            
//             //no se debe hacer
//             // resolve('El usuario existe')
//             console.log('El usuario existe');
            
//             //Encadenando resolve con lo que me retorne mi otra promesa de obtener direcciones
//             resolve(obtnerDirecciones(id))
//         }else{

//             reject('El usuario no existe')
//         }
//     })

// }

// const obtnerDirecciones = id =>{

//     return new Promise((resolve,reject)=>{

//         if(direcciones.find(usuarios => direcciones.id === id)){

//             resolve('La direccion existe')
//         }else{

//             reject('La direccion no existe')
//         }
//     })


// }

// //Bunea forma de encadenar promsesas
// obtenerUsuario(1).then((res) =>{

//     console.log(res);
//     // retorna la promesa de obtener direcciones
//     return res
// }).then((mensaje)=>{

//     console.log(mensaje);
    
// }).catch((error)=>{
//     console.error(error);
    
    
// })





// Encadenamiento de pormesas incorrecto puesto que se el codigo crece incorrectamente y se hace mas dificil de entender

// obtenerUsuario(2).then((res)=>{
//     console.log(res);
//     obtenerDirecciones(2).then((mensaje =>{
//             console.log(mensaje);
            
//         }).catch((error) =>{
//         console.log(error);
        
//     })
// }).catch((error)=>{
//     console.log(error);
    
// })