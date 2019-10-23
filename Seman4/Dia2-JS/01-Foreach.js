//foreach (()=> {}) funcion que itera el arreglo de items 
// y recibe un callback() el cual envia hasta 3 parametros
//(elemento, indice, arregloCompleto)


// notas.forEach((elemento, i) => {

//     console.log(`Posicion => ${i}`);
//     console.log(`Elemento => ${Elemento}`);
    
    
// });


//map(() =>{}) funcion para aplicar una formula a cada elemento
//del arreglo y retornar un nuevo arreglo con los elementos modificados
let notas = [10,11,14,20,5,8,20,14];


let dobles = notas.map((elemento, i) =>{

    return elemento *3;
});


let doblesV2 = notas.filter((elemento, i) =>{

    if(elemento % 2 == 0) ;

    return elemento;
});

console.log(dobles);
console.log(doblesV2);