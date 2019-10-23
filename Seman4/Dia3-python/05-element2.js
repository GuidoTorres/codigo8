
var principal = document.getElementById("principal");

//createelement([element]) Crea un elemento nuevo en el html pero no lo coloca

var parrafo = document.createElement("p");

parrafo.innerHTML = "Soy un elemento crado en javascript";
parrafo.style.color= "blue";

//Para agregarlo a nuestro documento html, primero debemos indicar donde los vamos a poner 
//una vez que tengamos donde lo queremos usamos el metodo principal.appendchild(parrafo)
//esto va a agregar a su nuevo hijo al final de todos sus hijos

principal.appendChild(parrafo);

for(let i = 0; i<5; i++){

    let miParrafo = document.createElement("p");
    miParrafo.innerHTML = `Soy el parrafo No ${i +1} creado en javascript`;
    principal.appendChild(miParrafo);
}

// Crear una tabla de n elementos ingresados por prompt , cada fila tendra los campos:
// Nro. (numeracion automatica)
// Cantidad(ingresada por usuario)
//Descripcion(Ingresada por el usuario)
// P:Unitatio(Ingresado por el usuario)
// p.totla (Ingresado por el sistema)
// Disgregar su igv( 18% del total)
// al final de la tabla mostrar el toal de la compra
// y luego un parrafo que inidique si es mayor de 50 soles puede pagar en efectico o con tarjeta 
//si es menor de 50 soles, solo puede cpagar con efectivo.


//========================

// var cabeceraTexto = ["Nro.", "Cantidad", "Descripcion", "P. Unitario", "Total"];
// var cabecera = document.createElement("tr");

// for (let index = 0; index < array.length; index++) {
    
//     var th = document.createElement("th");

//     th.innerHTML = cabeceraTexto[index];
//         cabecera.appendChild(th);
    
// }

// console.log(cabecera);




var seccion = document.getElementById("miSeccion")

var n = +prompt("Ingrese la cantidad de elementos");

var tabla = document.createElement("table");
var cabecera = document.createElement("tr");

var thNro = document.createElement("th");
thNro.innerHTML="Nro.";

var thCant = document.createElement("th");
thCant.innerHTML="Cantidad"

var thDesc = document.createElement("th");
thDesc.innerHTML="Descripcion"

var thPreUni = document.createElement("th");
thPreUni.innerHTML="Precio unitario"

var thtotal = document.createElement("th");
thtotal.innerHTML="Total"


cabecera.appendChild(thNro);
cabecera.appendChild(thCant);
cabecera.appendChild(thDesc);
cabecera.appendChild(thPreUni);
cabecera.appendChild(thtotal);


tabla.appendChild(cabecera);

seccion.appendChild(tabla);
tabla.border = 1;

var pfinal =50;
var parrafo = document.createElement("p");

if(pfinal<50){

    parrafo.innerHTML ="Solo puede paga en efectico"
}
else{

    parrafo.innerHTML = "Puede pagar en efectivo o tarjeta"
}

seccion.appendChild(parrafo)


