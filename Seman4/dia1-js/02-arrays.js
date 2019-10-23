//inicializando un array

let numeros = new Array();
console.log(numeros);


//Propiedades de los arrays

// push(elemento(s)) => recibe un elemtno y lo inserta al final de un array
numeros.push(8, 9, 10);
console.log(numeros);

// pop() => extrae el ultimo elemento de un array y modifica el array original

console.log(numeros.pop());
console.log(numeros);


//concar(arreglo) => concatena el arreglo actual con el arreglo recibido por la funcion
//El arreglo orginical no se modifica

console.log(numeros.concat([1,2,3,4]));


//splice(posicion, nroElementos, valores a Inyectar)
//Elimina nroElemetos desde la posicion dad y devuelve un arreglo de elementos elimindaos
// si se nvia el parametro valoresaInyectar(que puede ser mas de un valor),
//inyecta esos valores en la posicion indicada

console.log(numeros.splice(2,1));


//indexof // mismo comportamiento que la funcion de los strings

//===============================0

//filter(funciton) => 

let notas = [10,11,14,20,5,8,20,14];

let mifuncion = (elemento, indice) =>{

    console.log(elemento)

}


notas.elemento(mifuncion);