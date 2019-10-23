// // Creando un objeto date con la fecha actual
// let hoy = new Date();


// console.log(hoy);
// //Enero tiene el valor de cero
// //Diciembre de 11
// let navidad = new Date(2019, 11, 25);

// console.log(navidad);

// let halloweed = new Date("October 30 2019");

// console.log(halloweed);


// //=======================================

// //obtener el año de una fecha

// console.log(navidad.getFullYear());

// //el numero del dia de una fecha
// console.log(navidad.getDate());

// //obtener el mes de una fechas

// console.log(navidad.getMonth());

// //obtener las horas de una fecha

// console.log(navidad.getHours());


// //Restando dos fechas

// let resta = navidad - halloweed;
// console.log(resta);

// //imprimir la cantida  de semanas que hay entre halloween y navidad

// let rpta = (navidad.getMonth() - halloweed.getMonth()) * 4
// console.log(rpta, `semanas`);

// //las propiedades set sirven para modificar nuestra variavle 

// let nueva_navidad = navidad.setFullYear(2015)
// // let nueva_navidad = navidad.setMonth(5)//vAlores 0 -11  
// console.log(nueva_navidad)

// let today = new Date(2018, 11, 01); // podemos modificar 
// //nuestra decha inicial declarandola en el constructor
// console.log(today);
// today.setDate(today.getDate()+5);
// console.log(today);




let days1 = new Date(2019, 10, 25, 10 ,29);//si hay descuento
let days2 = new Date(2019,10 ,24, 14, 38); // no hay descuento


let cyber= new Date(2019, 10 ,25);
let cyber2 = new Date(2019, 10, 28); 

if (days2 >= cyber && days2 <= cyber2 ){

    console.log("Hay 10% de descuento en toda la tienda")
} 
else{
    console.log("Los precios no tienen descuentos")
}