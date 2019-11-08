// //onload se ejecuta automaticamente, despius de que todos los recuros o el elemento interno se hayan 
// //cargado completamente


// window.onload = () =>{


//     console.log("Los elementos internos de windows se ha ncargaado");
//     let miBoton = document.getElementById("miBoton");
// miBoton.innerText = "Nuevo texto"
    
// }}

let miBoton = document.getElementById("miBoton");
miBoton.innerText = "Guardar Storage";

miBoton.onclick = () =>{
    //guardar elemento en el localstorage
    //setitem(clave,valor)
    //Todo elemetno guardado en el localstorage es un string
    localStorage.setItem('color', '#669011');

}

//Verifica si existe la clave solor en el localstorage, si existe, cambia el color de fondo,
//clave sino se queda cone el color de fondo por defecto
let verficarStorage = () =>{

    //getItem = funcion que obtine el valor de una clave guardada en el localstorage
    let color = localStorage.getItem('color');

    if(color){

        let body = document.getElementById("miBody");
        body.style.backgroundColor = color;
        console.log(color);

    }
    else{

        console.log(("No existe la clave color"));
        
    }

}

verficarStorage();



let Nombre  = document.getElementById("inputNombre")
let Apellido = document.getElementById("inputApellido")
let Color = document.getElementById("inputColor")
let Boton = document.getElementById("inputBoton")



inputBoton.onclick = (event) =>{

    event.preventDefault();
    localStorage.setItem("nombre", Nombre.value)
    localStorage.setItem("Apellido", Apellido.value)
    localStorage.setItem("colorFavorito", Color.value)

}

let verificarPreferencias = () => {

    let nombreStorage = localStorage.getItem("nombre");
    let apellidoStorage = localStorage.getItem("Apellido");
    let colorStorage = localStorage.getItem("colorFavorito");

    if (nombreStorage) {

        Nombre.value = nombreStorage;
        
    }

    if (apellidoStorage) {
        Apellido.value =apellidoStorage;
        
    }

    if (colorStorage) {

        Storage.value = colorStorage;
        
    }

}

verificarPreferencias();



