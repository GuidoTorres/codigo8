

let botonAgregarElemento = document.getElementById("btnAgregarElemento");

let cuerpotabla = document.getElementById("cuerpoTabla");

let cantidad = document.getElementById("inputCanti");
let descripcion =document.getElementById("inputDescr");
let pUnitario = document.getElementById("inputPUnit");
let total = document.getElementById("inputTotal");
let guardar = document.getElementById("Guardar")


botonAgregarElemento.onclick = () =>{

    let tr1 = document.createElement("tr");

   

    for (let index = 0; index < 1; index++) {



        let tr = document.createElement("tr");


        cuerpotabla.appendChild(tr);
        cuerpotabla.appendChild(tr1);



        for (let j = 0; j < 5; j++) {
            
            let td =document.createElement("td");
            cuerpotabla.appendChild(td);
            let input = document.createElement("input");
            
            td.appendChild(input);
            input.setAttribute("disable", "disable");
        }


    }

    
}



guardar.onclick = () =>{

    event.preventDefault();


    let objPreferencias = {
    
   cantidad: cantidad.value,
   descripcion: descripcion.value,
   pUnitario: pUnitario.value
 };
    // JSON:stringify(objeto | arreglo) devuelve el valor en string del json pasado por parametro
   let preferencias = JSON.stringify(objPreferencias);
   localStorage.setItem('preferencias', preferencias)

   console.log(preferencias)
  console.log(objPreferencias);
   
}


