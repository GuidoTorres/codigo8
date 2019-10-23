//Da la informacion acerca del origen del documento
//se puede usar como una propiedad para declarar la url del documento

// window.location = "https://www.google.com"
console.log(window.location);

//da informacion acerca de deonde seta corriendo la pagina web
console.log(window.navigator);


//document => da acceso a los objetos que representan los elementos 
//en el html

window.document.getElementById("span");

//propiedad que devulve el ancho de la ventan en pixeles
console.log(window.innerWidth);

//Propiedad que devuelve el ancho de la ventan en pixeles
console.log(window.innerHeight);

//propiedad que muestra un mensaje de alerta al usuario

window.alert("Esto es una alerta");


//porpiead que pide al usuario ingresar un dato por medio de un cuadro 
//emergente

window.prompt("Ingrese un valor");

//Propieadad que sirve para confirmar algun suceso
let rpta = window.confirm("Estas seguro que quieres realizr los cambios")

console.log(rpta);

//Espera a que pase un tiempo definido en milisegundos para ejecutar una accion 
window.setTimeout(
    ()=> {
    
    console.log("hola");


}, 1000);

//que realiza indeterminadamente despues de un periodo de tiempo

window.setInterval(
    ()=> {
    
    console.log("Me ejecuto");


}, 900
);


