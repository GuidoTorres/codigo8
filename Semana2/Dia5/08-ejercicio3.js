
var ct = +prompt("Ingrese el costo del traje");
var de;
if(ct >2500){

    de = ct *0.15;
}
else{

    de = ct *0.08;
}

var pf = ct -de;

console.log( "El precio final con descuento es: " + pf);
console.log("El descuento es :" + de);
