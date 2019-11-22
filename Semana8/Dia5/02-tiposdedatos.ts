//String
let nombre: string;

nombre = "Guido";

//number
let edad: number;
edad = 28;

//booleanos
let activo : boolean;
activo = true;

//declaracion directa
let apellido: string = "Torres";

//arreglos
let libros: Array<string>;
libros.push("Mi planta de naranja lima");

//areglos forma 2
let precios: Number[];

precios.push(90.2);

// TIPO DE DATO 'ANY' = que es cualquier tipo de datos
let objeto : any;

objeto = "aaaa";
objeto = 123;

//arreglo any
let arregloAny: Array<any>
arregloAny.push(90);
arregloAny.push("asda");

//variables de dos tipos de datos

let alfanumerico : string | number;
alfanumerico = "tres";
alfanumerico = 3;

//areglos de 2 tipo de datos

let arreglo2: Array<string | number>;
arreglo2.push("Texto");
arreglo2.push(2);


// =======================

let sumar = (a: number, b: number) =>{
    console.log(a+ b);
    
}


sumar(1 , 2);

