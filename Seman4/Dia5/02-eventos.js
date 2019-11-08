
let inputNombre = document.getElementById("inputNombre");
let aviso = document.getElementById("aviso");


// onFocus cuadno el cursor o el tab index esta 
//sobre un elemento

// inputNombre.onfocus= () =>{

//     inputNombre.classList.add("input-focus");


// }

// //onblur => cuando el curso o el tabindex abandona el elemtno


// inputNombre.onblur = () => {

//     inputNombre.classList.remove("input-focus");
// }


//onkeyup => cunado una tecla deja de ser presionada

// inputNombre.onkeyup = () => {

   
//         let letra = document.createElement("div");
//         punto.style.backgroundColor = "red";
//         punto.style.height = "50px";
//         punto.style.width = "50px";
      
//         miBody.appendChild(punto)
    
    
    
//     }


inputNombre.onkeyup = (evento) =>{

    aviso.innerText = `Le quedan ${20 - inputNombre.value.length}`

}
