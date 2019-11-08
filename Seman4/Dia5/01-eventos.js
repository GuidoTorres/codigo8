
let boton1 = document.getElementById("boton1")
// let boton2 = document.getElementById("boton2")

// let clickGlobal = (evento) =>{

//     evento.target.style.color ="red";

//     if(evento.target.getAttribute("id") == "boton1"){

//         console.log("clic al boton 1");

//     }else{

//         console.log(("clic al boton 2"));
        
//     }
     

// }


// boton1.onclick = clickGlobal;
// boton2.onclick = clickGlobal;

let miBody = document.getElementById("miBody")


miBody.onclick = (evento) => {

    let cordX = evento.offsetX;
    let cordY = evento.offsetY;

    let punto = document.createElement("div");
    punto.style.backgroundColor = "red";
    punto.style.height = "50px";
    punto.style.width = "50px";
    punto.style.borderRadius = "50%"
    punto.style.position = "absolute";
    punto.style.left = cordX + "px";
    punto.style.top = cordY + "px"
    miBody.appendChild(punto)



}





// let clickGlobal = (evento) =>{

//     evento.target.style.color ="red";

//     if(evento.target.getAttribute("id") == "boton1"){

//         let punto = document.createElement("div");

        
//     }
// }