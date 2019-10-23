
var div1 = document.getElementById("div1")

//modificar los estilos de ese elemento
//elemento.style.[estilo] => apra alterar o añadir estilos por medio del js

div1.style.color= "#FF8421";
div1.style.padding = "10px";
div1.style.border = "1px dashed red";
div1.style.opacity = "0.5";

//como vemos podemos dar todos los estilos que queramos a nuestro html
//Entonces si un estilo en css tiene una sola palabra ejemplo paadding
//Entonces en js es style.padding
//Pero si un estilo esta conformado por dos palabras como por ejemplo: bakcgroind-image
//en js es style.backgroundImage se elimina el guion y se utiliza el camelcase



//Otras propiedades de los elementos:
//clientwidth = obtiene le ancho del elelemnto

console.log(`ancho del div  ${div1.clientwidth}` );
// Alto del elemento
console.log(`alto del div ${div1.clientHeight}`);

//oofsetop => cantidad de pixeles de desplazo desde el techo del contenedor
console.log(`Offset Top ${div1.offsetTop}`);

//offsetleft => cantidad de pixeles de desplazo desde la izquierda de su contenedor

console.log(`Offset left ${div1.offsetLeft}`);

//classname => devuelve o asigna el nombre de la clase que tiene el elemento

console.log(`Clase del div ${div1.className}`);

div1.className = "celeste"
console.log(`Clase del div ${div1.className}`);

//classlist => devuelve un arreglo con todas las clases del elemento

console.log(div1.classList);

//classlist.add([nombre de la clase]) => agrega la clase a la lista de clases

div1.classList.add('celeste')

//classlist.remove([nombre de la clase]) => elimina la clase de la lista de clases

div1.classList.remove('celeste');

//classlist.contains ([nombre de la clase]) => verifica si nuestro elemento tiene dentro de su lista
//esac clase u devulve verdadero o falso

console.log(div1.classList.contains("contenedor"));

//classlist.toggle([nombre de la clase]) => verifica si esta la clase sieta la quita
//sino esta la agrega

setInterval(() => {
    div1.classList.toggle("celeste");
}, 500);

//modificando su contenido

//innerhtml => declara o devuleve el contenido de un elemento

// <elelemto> soy su contenido<elemento>

console.log(div1.innerHTML);

div1.innerHTML="<p>Ahora yo soy el texto</p>"




































