let boton = document.getElementById("boton")


 let direccion = $("#direccion");
  let precioAuto = $("#precioAuto");
 let cantidad = $("#cantidad");
 let precioMoto = $("#precioMoto");
let precioCamioneta = $("#precioCamioneta");

let btnSubmit = $("#btnSubmit")
  



boton.onclick = () =>{

            event.preventDefault()
            console.log(precioAuto.val());
            
            let postman = new XMLHttpRequest();
            let formulario = {

                direccion : direccion.val(),
                cantidad : cantidad.val(),
                precioAuto : precioAuto.val(),
                precioMoto : precioMoto.val(),
                precioCamioneta : precioCamioneta.val()
            }

            postman.onreadystatechange = () => {
                switch (postman.readyState) {
                    case 4:
                        console.log("La data ya está aquí");
                        let jsonRpta = JSON.parse(postman.responseText);
                        console.log(jsonRpta);
                        break;
                }
            }
            postman.open("POST", "http://127.0.0.1:5000/agregar/playa");
            postman.setRequestHeader("Content-type", "application/json");
            postman.send(JSON.stringify(formulario));
        }



