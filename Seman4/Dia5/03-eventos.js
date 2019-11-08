
// let paises = [

//     {nombre: 'Peru',
//      clave: 51
//     },
//     {
//         nombre : 'Argentina',
//         clave : 28
//     }
// ] ;

// let listapaises = document.getElementById('listapaises')

// //poblar la lista de paises con la data del arreglo
// //paises
// //<Option value = "clave"> nombre del pais</option>

// paises.forEach((element) => {

//     let option = document.createElement("option");
//     option.innerText = element.nombre;
//     option.setAttribute("value", element.nombre);
//     listapaises.appendChild(option);
// });


// listapaises.onchange = function(){

//     //this hace referencia al elemento en el que se encuentra la funcion
//     //this solo funciona cuando la funcion es anonima y no es funcion flecha
    
//     // value => el atributo valu del option seleccionado
//     console.log(this.value)

//     //selectedIndex => la posicion del option seleccionado
//     console.log(this.selectedIndex)

//     //children arreglo de option que contiene el select 
//     console.log(this.children);

//     //obtener el texto del option seleccionado

//     console.log(this.children[this.selectedIndex].innerHTML);
    


// }

// let link = document.getElementById("link1");

// link.onclick  = (evento) =>{

// //preventDefault Cancela cualquier comportamiento por defecto qye desencadene el evento
// evento.preventDefault();
// console.log("Se hizo click al link");

// }

// //Evento que se desencadena al hacer click derecho sobre el elemento

// link.oncontextmenu = (evento) =>{

//     evento.preventDefault()

// }

//establecer e contextmenu para el body
// En cualquier lugar que hagan click derecho sobre el body
//se debujara un div >ul > li*2
// El texto del Li 1 sera = opcion 1
// el texto del li 2 sera = opcion 2

let miBody = document.getElementById("miBody");



miBody.oncontextmenu = (event) =>{

    event.
    // let cordX = derechoclic.offsetX;
    
    // let cordY = derechoclic.offsetY;
    // console.log(cordx, cordY);


  
}



  // // punto.style.backgroundColor = "red";
    // // punto.style.backgroundColor = "red";
    // // punto.style.height = "50px";
    // // punto.style.width = "50px";
    // // punto.style.left = cordX + "px";
    // // punto.style.top = cordY + "px"
    // miBody.appendChild(div)

