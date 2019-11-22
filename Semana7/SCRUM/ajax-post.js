let inputposttitulo =document.getElementById("inputUsuario")
let inputpostbody =document.getElementById("inputContraseña")
let selectuserid =document.getElementById("selectuserid")
let btnsubmit =document.getElementById("btnsubmit")

btnsubmit.onclick=(evento)=>{
    
    evento.preventDefault();
    // paso 1 armar el json para enviar al servidor
    let objpublicacion={
        password:inputpostbody.value,
        correo:inputposttitulo.value
    }

    let ajax=new XMLHttpRequest();
    // Establecer el tiempo de espera al servidor
    ajax.timeout=4000;
    //ontimeout Funcion que se ejecuta cuando el servidor 
    //no responde en el tiempo establecido
    ajax.ontimeout=()=>{
        console.log("El servidor no responde");
    }
    //Configurando para cuando llegue la respuesta
    ajax.onreadystatechange=()=>{
        if (ajax.readyState==4) {
            //Llego la data
            console.log(ajax.responseText);
            //Imprimiendo el codigo se estado
            console.log(ajax.status);
        }
    }
    
    //Configurar el metodo y la URL
    ajax.open("POST"," http://127.0.0.1:5000/usuario/login");
    //Establecer los headers que se enviara al servidor

    ajax.setRequestHeader("Content-type","application/json");
    
    
    //Configurar los datos a enviar al servidor
    ajax.send(JSON.stringify(objpublicacion));
}










