let paises = [
    { idPais: 1, nombrePais: 'Perú', },
    { idPais: 2, nombrePais: 'Bolivia', },
    { idPais: 3, nombrePais: 'Brasil', }
  ];
  let ciudades = [
    { idCiudad: 1, idPais: 1, nombreCiudad: "Lima" },
    { idCiudad: 2, idPais: 1, nombreCiudad: "Puno" },
    { idCiudad: 3, idPais: 2, nombreCiudad: "La Paz" },
    { idCiudad: 4, idPais: 2, nombreCiudad: "Cochabamba" },
    { idCiudad: 5, idPais: 3, nombreCiudad: "Sao Paulo" },
    { idCiudad: 6, idPais: 3, nombreCiudad: "Brasilia" },
  ]


let miBody = document.getElementById("miBody")

let select1 = document.createElement("select");


let select2 = document.createElement("select");

let boton = document.createElement("button")


boton.innerText = "Imprimir"

miBody.appendChild(select1)

miBody.appendChild(select2)

miBody.appendChild(boton);



paises.forEach((objPais) => {
    let option1 = document.createElement("option");
    option1.innerText = objPais.nombrePais;
    option1.setAttribute("value", objPais.idPais);
    select1.appendChild(option1);
  });

  ciudades.forEach((objCiudad) => {
    let option2 = document.createElement("option");
    option2.innerText = objCiudad.nombreCiudad;
    option2.setAttribute("value", objCiudad.idCiudad);
    select2.appendChild(option2);
  });




 boton.onclick = () => {

    let span = document.createElement("span")
    miBody.appendChild(span)


    
    span.innerHTML = select1.selectedIndex;

 }



