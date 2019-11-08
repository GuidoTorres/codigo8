
//destructuracion de arreglos
let numeros = [100,2,3,4,5,6];

let [uno,dos, ...resto] = numeros;

console.log(uno,dos);
console.log(resto);


let matriz = [100, 5, [7, 9], 90]

let[, , [siete]] = matriz;
console.log(siete);

// Desctruturando los dos primeros elemewntos del arreglo numero
// que llegan a la funcion 
let sumarLosDosPrimeros = ([a, b]) => {

    console.log(a + b);
    
}

sumarLosDosPrimeros(numeros);


//destructuracion de objetos

let objPersona = {

    nombre :'Guido',
    apellido: 'Torres',
    dni :'72798529',
    edad : '25',
    nacionalidad:{

        pais:'Peru',
        gentilicio: 'Peruano'
    },

    coloresFavoritos: ['Azul','Negro','Azul']
};


//destructurar el nombre
// DEstructurar el nombre con el mismo nombre de variable
let {nombre} = objPersona;
console.log(nombre);

//Destructurar el nombre con un nuevo nombre de avariable

let {nombre: alias } = objPersona;

console.log(alias);

//DEstrucutrar varias variables a la vez

let {edad, dni } = objPersona;
console.log(`Edad ${edad}`);
console.log(`Dni ${dni}`);



let {nacionalidad: {gentilicio}} = objPersona;


console.log(gentilicio);


let {coloresFavoritos: [, Negro]} = objPersona;

console.log(Negro);



let imprimirDni = ({dni}) => {
    console.log("El dni es: " +dni);
    


}

imprimirDni(objPersona)



