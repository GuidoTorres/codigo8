let sombra = $("<div></div>");
sombra.css("position", "absolute")
.css("width", "35px")
.css("height", "35px")
.css("border-radius", "50%")

.css("box-shadow", "12px 12px 1px  ")
.css("top", 0)
.css("left", 0)

$("body").append(sombra);

let cuadrado = $("body");
$("#body1").mousemove(function (e) { 
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    sombra.css("top", e.clientY-10);
    sombra.css("left", e.clientX-10)

    if(e.offsetY >= 550 && e.offsetY <= 800 ){
     
        
        swal.fire({

            icon: 'success',
            type: 'success',
            text: 'Ganaste'
        })
    }
    

    
    
});

    // setTimeout(()=>{

    // swal.fire({

    //     icon: 'success',
    //     type: 'success',
    //     text: 'Ganaste'
    // })

    // }, 2000)