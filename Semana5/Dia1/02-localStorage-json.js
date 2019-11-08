
window.onload = () =>{

    let Nombre  = document.getElementById("inputNombre");
    let Apellido = document.getElementById("inputApellido");
    let color = document.getElementById("inputColor");
    let boton = document.getElementById("inputBoton");


boton.onclick = () =>{

    event.preventDefault();


let objPreferencias = {
    
    nombre: Nombre.value,
    apellido: Apellido.value,
    color: color.value
};
    // JSON:stringify(objeto | arreglo) devuelve el valor en string del json pasado por parametro
   let preferencias = JSON.stringify(objPreferencias);
   localStorage.setItem('preferencias', preferencias)
   
}

let cargarPreferencias = () =>{

    let preferenciasString = localStorage.getItem('preferencias');

    //json.parse(json string) => devuelve objeto json a prtir de un string pasdo por parametros
    let objPreferencias = JSON.parse(preferenciasString);
    Nombre.value = objPreferencias.nombre;
    Apellido.value = objPreferencias.apellido;
    color.value = objPreferencias.color;
}

cargarPreferencias();

}