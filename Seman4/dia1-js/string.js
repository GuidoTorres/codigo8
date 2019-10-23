
// let nombre = new String("Jorge Luis");

// console.log(nombre);

// //Propiedades de los strings

// //length => indica numero de caracteres del string

// console.log(nombre.length);

// //toLowerCase() => devuelve el valor a minuscula del string

// // No cambia el verdadero valor del string
// console.log(nombre.toLowerCase());

// //toUperCase() => devuelve el valor a mayuculas no cambia el verdadero valor

// console.log(nombre.toUpperCase());

// //trim() => quita los espacios en blanco a los extremos del string(incio---------final)

// //substr(inicio, nrodeletras) devuelve una subcadena apartir del string original
// //incio => posicion en la que inicia la subcadena
// //nroletras => cantidad de espacios luego del inicio


// console.log(nombre.substr(4,4));

// //substring(inicio, final) => devuelve una subcadena a partir del string original
// //inicio => posicio en que inicia subcadena
// //final => posicion que termina subcadena
// //Nota, si no se especifica el final la subcadena termina en el efinal de la cadena
// console.log(nombre.substring(5,9));

// //Imprimir 5 ultimos digitos de string
// console.log(nombre.substring(nombre.length -5));


// //Startswidth(cadena) => devuelve true en caso que el string inicie con el contenido de la 
// //variable cadena
// //DEVuelve strin en misnusculas
// // console.log(nombre.toLowerCase.startsWith("tEc".toLowerCase()));

// //endWith(cadena) => analogo a starswith, pero se analiza que el string
// //finalice con la cadena

// console.log(nombre.endsWith("s"));


// //indexof(cadena) => devuelve la posicion en la que subcadena inicia.
// //si la subcadena no existe, devulve -1

// console.log(nombre.indexOf("L"));


// //charAt(posicion) => devulve la letra que se ecnuentra en la posicion dada


// console.log(nombre.charAt(2));
// console.log(nombre[2]);

let texto = "ingresa un textoaa";
// //Ejercicios clasicos
// //Determinar nro de vocales en string

// let vocales = 0;,

//     for (let i = 0; i < texto.length; i++) {

//         if(texto[i] == "a" || texto[i] == "e" || texto[i] == "i" || texto[i] == "o" || texto[i] == "u"){

//             vocales = vocales +1 ;
            
            
//         }

        
        
//     }
//     console.log("La cantidad de vocales es: ", vocales);

// //Determinar nnumero de palabras en string

let palabras = 0;
for (let j = 0; j < texto.length; j++) {
    
   if(texto[j] != " "){
        
    palabras = palabras + 1 ;

   }
  
 }

}

console.log(palabras);

//Determinar si una cadena es un palindromo

// let pal = prompt("Ingrese palindromo:");
// let palindromo = 0;
// for (let x = 0; x < pal.length; x++) {

//     if(pal[x] != " "){

//         pal = pal + pal[i];
//     }
// }





//Operador ternario se usa cuando el if y el else, tienen respuesta
//de una sola linea de ejecucion


//rpta == true ? console.log("Si es palondromo") : console.log("No es palindromo")