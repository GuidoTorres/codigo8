

let btnTraerDatos = document.getElementById("btnTraerDatos");
let ajax = new XMLHttpRequest();


btnTraerDatos.onclick = () => {

    // let ajax = new XMLHttpRequest();
    //la funcion send() hace dos acciones
    //1.- Establece el body o el contenido que va a enviar al servidor
    //2.- Dispara la peticion   HTTP


    ajax.onreadystatechange = () => {
        let resultado = document.getElementById("resultado");
        switch (ajax.readyState) {
            case 1:
                resultado.innerHTML = `<div class="alert alert-primary" role="alert">
                    <i class="fas fa-sync-alt fa-spin"></i><span style="margin-left:30px">CARGANDO</span>
                  </div>`;
                break;
            case 2:

                break;
            case 3:

                break;
            case 4:
                let jsonRpta = JSON.parse(ajax.responseText);
                resultado.innerHTML = "";
                let table = document.createElement("table");
                table.classList.add("table")
                let thead = document.createElement("thead");
                thead.innerHTML = `<th>id</th>
                                <th>marca</th>
                                <th>modelo</th>
                                <th>placa</th>
                                <th>color</th>
                                <th>tipo de vehiculo</th>`;
                table.appendChild(thead);
                for (let i = 0; i < jsonRpta.length; i++) {
                    let tbody = document.createElement("tbody");
                    tbody.innerHTML = `<tr>
        <td>${jsonRpta[i].id}</td>
        <td>${jsonRpta[i].marca}</td>
        <td>${jsonRpta[i].modelo}</td>
        <td>${jsonRpta[i].placa}</td>
        <td>${jsonRpta[i].color}</td>
        <td>${jsonRpta[i].tipo_de_vehiculo}</td>

    </tr>`
                    table.appendChild(tbody);
                }
                resultado.appendChild(table);
                console.log(jsonRpta);

                break;
        }
    }
    ajax.onprogress = (evento) => {
        console.log(evento);
    }
    ajax.open("GET", "https://5dc1a7336ca10a0014d5dada.mockapi.io/auto");

    ajax.send(null);
}



let resultado_agregar = document.getElementById("resultado_agregar");
let btnagregar = document.getElementById("btnagregar");
let marca_agregar = document.getElementById("marca_agregar");
let modelo_agregar = document.getElementById("modelo_agregar");
let placa_agregar = document.getElementById("placa_agregar");
let color_agregar = document.getElementById("color_agregar");
let tipovehiculoagregar = document.getElementById("tipovehiculoagregar");




btnagregar.onclick = (event) => {
    event.preventDefault();

    let objPublicacion = {
        marca: marca_agregar.value,
        modelo: modelo_agregar.value,
        placa: placa_agregar.value,
        color: color_agregar.value,
        tipo_de_vehiculo: tipovehiculoagregar.value
    }
    ajax.timeout = 4000;
    ajax.ontimeout = () => {
        console.log("el servidor no responde");

    }
    ajax.onreadystatechange = () => {
        if (ajax.readyState == 1) {
            resultado_agregar.innerHTML = `<div class="alert alert-primary" role="alert">
         <i class="fas fa-sync-alt fa-spin"></i><span style="margin-left:30px">ENVIANDO</span>
                  </div>`;
        }
        if (ajax.readyState == 4) {
                    resultado_agregar.innerHTML = `<section class="row justify-content-center">
                     <form class="row col-12">
                         <div class="form-group col-6" >
                             <label for="">marca</label>
                             <input type="text" class="form-control" id="marca_agregar" placeholder="Ingrese la marca">
                        </div>
                        <div class="form-group col-6" >
                            <label for="">modelo</label>
                            <input type="text" class="form-control" id="modelo_agregar" placeholder="Ingrese el modelo">
                        </div>
                        <div class="form-group col-6" >
                            <label for="">placa</label>
                            <input type="text" class="form-control" id="placa_agregar" placeholder="Ingrese la placa">
                        </div>
                        <div class="form-group col-6" id="color_agregar">
                            <label for="">color</label>
                            <input type="text" class="form-control" id="color_agregar" placeholder="Ingrese el color">
                        </div>
                        <div class="form-group col-6" >
                            <label for="">tipo de vehiculo</label>
                            <input type="text" class="form-control" id="tipo_vehiculo_agregar" placeholder="Ingrese el tipo de vehiculo">
                        </div>
                    </form>
            </section>`;
        }
    }
    ajax.open("POST", "https://5dc1a7336ca10a0014d5dada.mockapi.io/auto");
    ajax.setRequestHeader("Content-type", "application/json");
    ajax.send(JSON.stringify(objPublicacion));
}

let btnEliminar = document.getElementById("btnEliminar");
let Eliminar = document.getElementById("Eliminar");


btnEliminar.onclick = (event)=>{
    console.log("q");
    event.preventDefault();
    ajax.open("DELETE", `https://5dc1a7336ca10a0014d5dada.mockapi.io/auto/${Eliminar.value}`);
    ajax.send(null);

}



let resultado_agregar1 = document.getElementById("resultado_agregar1");
let btnagregar1 = document.getElementById("btnagregar1");
let marca_agregar1 = document.getElementById("marca_agregar1");
let modelo_agregar1 = document.getElementById("modelo_agregar1");
let placa_agregar1 = document.getElementById("placa_agregar1");
let color_agregar1 = document.getElementById("color_agregar1");
let tipovehiculoagregar1 = document.getElementById("tipovehiculoagregar1");
let ID_agregar1 = document.getElementById("ID_agregar1");





btnagregar1.onclick = (event) => {
    event.preventDefault();

    let objPublicacion = {
        marca: marca_agregar1.value,
        modelo: modelo_agregar1.value,
        placa: placa_agregar1.value,
        color: color_agregar1.value,
        tipo_de_vehiculo: tipovehiculoagregar1.value
    }
    ajax.timeout = 4000;
    ajax.ontimeout = () => {
        console.log("el servidor no responde");

    }
    ajax.onreadystatechange = () => {
        if (ajax.readyState == 1) {
            resultado_agregar1.innerHTML = `<div class="alert alert-primary" role="alert">
         <i class="fas fa-sync-alt fa-spin"></i><span style="margin-left:30px">ENVIANDO</span>
                  </div>`;
        }
        if (ajax.readyState == 4) {
                    resultado_agregar1.innerHTML = `<section class="row justify-content-center">
                     <form class="row col-12">
                     <div class="form-group col-6" >
                             <label for="">ID</label>
                             <input type="number" class="form-control" id="ID_agregar" placeholder="Ingrese ID">
                        </div>
                         <div class="form-group col-6" >
                             <label for="">marca</label>
                             <input type="text" class="form-control" id="marca_agregar" placeholder="Ingrese la marca">
                        </div>
                        <div class="form-group col-6" >
                            <label for="">modelo</label>
                            <input type="text" class="form-control" id="modelo_agregar" placeholder="Ingrese el modelo">
                        </div>
                        <div class="form-group col-6" >
                            <label for="">placa</label>
                            <input type="text" class="form-control" id="placa_agregar" placeholder="Ingrese la placa">
                        </div>
                        <div class="form-group col-6" id="color_agregar">
                            <label for="">color</label>
                            <input type="text" class="form-control" id="color_agregar" placeholder="Ingrese el color">
                        </div>
                        <div class="form-group col-6" >
                            <label for="">tipo de vehiculo</label>
                            <input type="text" class="form-control" id="tipo_vehiculo_agregar" placeholder="Ingrese el tipo de vehiculo">
                        </div>
                    </form>
            </section>`;
        }
    }
    ajax.open("PUT", `https://5dc1a7336ca10a0014d5dada.mockapi.io/auto/${ID_agregar1.value}`);
    ajax.setRequestHeader("Content-type", "application/json");
    ajax.send(JSON.stringify(objPublicacion));
}

