
//EVENTOS son funcoiones que se desencadenan cuando un elemento es afectado por una accion

//Esta accion puede ser por ejemplo un click, el mouse encima, cuando el mouse se mueve en el elemento etc.

//Formas de asignar un event0

let btnTema = document.getElementById("btnTema");

/**
 * FORMA1 -> la funcoin addeventListener
 * addEventListener("evento", funcion anonima)
 */

//  btnTema.addEventListener('click', () => {

//     alert("Me hicieron click")

//  });


 /**
 * FORMA2 -> Mediante la propiedad del elemento como evento
 * elemento.evento = funcion;
 * NOTA = a todo los eventos como propiedad se le agrega el prefijo on
 * por ejemplo onclick
 *  
 * */


 btnTema.onclick = () => {

    let link = document.getElementById("estilos");
    //Getattribute("atributo") => obtine el valor del atributo de un elemento
    if(link.getAttribute("href") ==" ./03-eventos-tema1.css"){
        link.setAttribute("href", "./03-eventos-tema2.css");

    }else{
        link.setAttribute("href", "./03-eventos-tema1.css");
        
    }

 };