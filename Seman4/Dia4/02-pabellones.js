/**
 * 
 * SISTEMA PARA CREAR UN PABELLON DE CEMENTERIO
 * 
 *El usuario ingresara la cantidad de filas y columnas del pabellon.
 El uduario ingresara tbn el nombre del pabellon 
 *Cada nicho debe tener centrado el numero que le corresponde, cada nicho mide 70px x 70px
* El usuario ingresara el tipo de numeracion
*Cada nicho representa aun objeto con los siguientes campos

    nroNicho, Fila, Columna, estado(pordefecto con el valor 'libre')
 */

let pabellon = prompt("Ingrese el nombre del pabellon:")
let fila = +prompt("Ingrese la cantidad de filas: ")
let columna = +prompt("Ingrese la cantidad de columnas: ")
let tabla = document.createElement("table")
tabla.innerHTML= `<thead>
                    <tr>
                 <th  >${pabellon}</th>
              
                  </tr>
                </thead>`

let nicho = [];
let tbody = document.createElement("tbody");
for (let i = 0; i < fila; i++) {


    let filaTmp = document.createElement("tr");

    for (let j = 0; j < columna; j++) {

        let tdTmp =  document.createElement("td");

        //TIPO A
        // tdTmp.innerHTML = (i * columna) + j +1;
        //TIPO B
        tdTmp.innerHTML = (i * columna) + columna -j;


        tdTmp.style.width = '70px';
        tdTmp.style.height = '70px';
        tdTmp.style.padding = "auto";
        tdTmp.style.borderRadius = "10px";
        tdTmp.style.backgroundColor = "#FFA233";

        let objNichoTmp = {

            fila: i +1 ,
            columna: j+1,
            nroNicho: (i * columna) + j +1,
            estado :'libre',

        };


        filaTmp.appendChild(tdTmp);


      

    }

     tbody.appendChild(filaTmp); 
 
}

tabla.appendChild(tbody);



let body = document.getElementById("miBody")

body.prepend(tabla);







