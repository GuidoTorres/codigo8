// Crear una tabla de n elementos ingresados por prompt , cada fila tendra los campos:
// Nro. (numeracion automatica)
// Cantidad(ingresada por usuario)
//Descripcion(Ingresada por el usuario)
// P:Unitatio(Ingresado por el usuario)
// p.totla (Ingresado por el sistema)
// Disgregar su igv( 18% del total)
// al final de la tabla mostrar el toal de la compra
// y luego un parrafo que inidique si es mayor de 50 soles puede pagar en efectico o con tarjeta 
//si es menor de 50 soles, solo puede cpagar con efectivo.



let elementos = +prompt("Ingrese la cantidad de elementos: ")

let tabla = document.createElement("table");

tabla.innerHTML= `<thead>
                    <tr>
                 <th>Nro</th>
                 <th>Cantidad</th>
                 <th>Descricpcion</th>
                 <th>P. Unitario</th>
                 <th>P. Total</th>
                    </tr>
                </thead>`


let tbody = document.createElement("tbody")
let contenido = "";
let sumatoria = 0;
for (let i = 0; i < elementos; i++) {

    let cantTmp = +prompt(`Ingresa la cantidad del producto ${i +1}`);
    let descTmp = prompt(`Ingresa la descripcion del producto ${i+1}`);
    let puniTmp = +prompt(`Ingresa el precio unitario del producto ${i +1}`);

    let total = cantTmp * puniTmp;

    contenido = contenido + `<tr> <td>${i+1}</td> <td>${cantTmp}</td> <td>${descTmp}</td> <td>${puniTmp}</td> <td>${total}</td></tr>`;

    sumatoria = sumatoria + total;
     
}

contenido = contenido + `<tr> <td colspan = "4"> TOTAL </td> <td> S/. ${sumatoria}</td></tr>
                        <tr> <td colspan = "4"> IGV </td> <td> S/. ${sumatoria * 0.18}</td></tr> `

tbody.innerHTML = contenido;

tabla.appendChild(tbody);

tabla.border = "1"

let body = document.getElementById("miBody")

body.prepend(tabla);

