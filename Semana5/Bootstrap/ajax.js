let ruta = document.location.href;

let btnTraerDatos = document.getElementById("btnTraerDatos")
let inputMarca = document.getElementById("inputMarca");
let inputModelo = document.getElementById("inputModelo");
let inputPlaca = document.getElementById("inputPlaca");
let inputColor = document.getElementById("inputColor");
let inputTipo = document.getElementById("inputTipo");


let btnSubmit = document.getElementById("btnSubmit");
    
    btnSubmit.onclick = (evento) => {
    
        evento.preventDefault();
        //paso 1 : armar json para enviar al ssrvidor
    
        let objPublicacion = {
    
        marca : inputMarca.value,
        modelo : inputModelo.value,
        placa : inputPlaca.value,
        color: inputColor.value,
        tipo : inputTipo.value
        };
    
        let ajax = new XMLHttpRequest();
    
        ajax.timeout = 4000;

        ajax.ontimeout = () =>{

            console.log("El servidor no responde");
        }
        //confidurando el evento cuando llegue la respuesta
        ajax.onreadystatechange = () =>{
    

            if (ajax.readyState == 4) {

                //llego la data
        
                console.log(ajax.responseText);

                //imprimiendo el codigo de estado
                console.log(ajax.status);
                        
                   
               } 
            
    
        }
        //configurar el metodo y la url

        ajax.open("POST", "https://5dc194f16ca10a0014d5d95a.mockapi.io")


        //estabelcer los headers o el tipo de contenido que se enviara al servidor

        ajax.setRequestHeader("Content-type", "application/json");



        //configurar los datos a enviar al servidor

        ajax.send(JSON.stringify(objPublicacion));
    }





if(ruta.indexOf("get")>= 0 ){


    console.log("Estoy en GET");

    let boton = document.getElementById("btnTraerDatos");

let tbody = document.getElementById("tbody")


let dibujarTabla = (usuarios) => {

    tbody.innerHTML="";

    // for (let i = 0; i < usuarios.length; i++) {
        
    //     let tr = document.createElement("tr");


    //     tr.innerHTML = ` 
    //     <td>${usuarios[i]["marca"]}</td>
    //     <td>${usuarios[i]["modelo"]}</td>
    //     <td>${usuarios[i]["placa"]}</td>
    //     <td>${usuarios[i]["color"]}</td>
    //     <td>${usuarios[i]["tipo_de_vehiculo"]}</td>`;
    //     tbody.appendChild(tr);



 
       
    

        
    // }

//   }

boton.onclick = () =>{



// Creando objeto ajax
let ajax = new XMLHttpRequest();

// OJO: antes de disparar la peticion HTTP se debe configurar los estados por los cuales pasa nuestra varible ajax

ajax.onreadystatechange = () => {

    switch (ajax.readyState) {
        case 1:

            break;
        case 2:

            break;
        case 3:

            console.log("Esperando respuesta del servidor");

            break;
        case 4:

            console.log("La data ya esta aqui");

            //resposeText : es el cuerpo de lo que responde el servidor
            // console.log(ajax.responseText);

            let jsonRpta = JSON.parse(ajax.responseText);

            console.log(jsonRpta);

            dibujarTabla(jsonRpta);
            

            
            break;

        default:
            break;
    }

}

//funcion que se ejecuta tantas veces como bytes tenga la data de respuesta del servidor
ajax.onprogress = (evento) =>{



    if(evento.lengthComputable){

        let progreso = (evento.loaded / evento.total) *100;
        console.log(progreso);
        
    }


}


//configurando el metodo y la url
ajax.open("GET", "https://5dc194f16ca10a0014d5d95a.mockapi.io");

//La funcion send hace 2 acciones
// Establece el body o el contenidoa enviar al servidor
// Disparar la peticion HTTP
ajax.send(null);




} 


    
}




}
