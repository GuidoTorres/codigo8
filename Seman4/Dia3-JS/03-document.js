//El bojeto doument sirve para manipular cualquier elemento del DOm
// captura un elemento por su ID definido entre parentesis
// nos va a devolver un unico o si hemos escirto mal el primer elemento que coincida con ese ID
var parrafo = document.getElementById("parrafo1");

parrafo.style.color = "Blue";
console.log(parrafo);


//get elementby ClassName([nombre de la clase])
//Devuelve un arreglo de los elementos con ese nombre de la clase

var claseRojo = document.getElementsByClassName("rojo")
console.log(claseRojo);

//getelementBytagname([nombre etiqueta])


//devuelve un arrglo de los elementos que son de esas especie

var divs = document.getElementsByTagName("div")
console.log(divs);

//querySlector([selector como en CSS o EMMET])

//Obtiene un elemento que coincida con el selector como en css#

var claseRojoCSS = document.querySelector(".rojo")

console.log(claseRojoCSS)

//queryselectorALl([selector como css]
//devuelce un arreglo con todods los elementos que coincidadn son el selector como si fuese css3

var claseRojoCSSTodos = document.querySelectorAll(".rojo");
console.log(claseRojoCSSTodos);

