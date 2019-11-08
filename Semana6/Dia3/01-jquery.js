
// EL simbolo o el obejto que representa a jquery es el $

// $(document).ready(function () {

    //selectores al estilo CSS
    // document.getElementById("btnCambiarColor")

    let btnCambiarColor = $("#btnCambiarColor")
    let btnAgregarParrafo = $("#btnAgregarParrafo")

    //eventos a los elementos
    //Los elemetnos van sin el prefijp 'on'
    //ejemplo: onclick =>

    btnCambiarColor.click(function () {

        //addClass, agrega una clase al elemetno de tipo JQuery
        $("#titulo").addClass("bg-danger text-white");
        $(".card-header").addClass("bg-dark text-white")

        // if($(".card-header").hasClass("bg-dark"){
        // $(".card-header").removeClass("bg dark text-white");

      
        // }else{

        //     $(".card-header").addClass("bg-dark text-white")
        // }
    });

    btnAgregarParrafo.click(function () {

        let parrafo = $("<p></p>")
        //elemento.html() es lo mismo q elemento.innerHTML  
        parrafo.html("Texto de prueba del parrafo 1");
  
          //appenchild
          //seleccionando el segundo elemetno que tenga
          //la clase card-body
  
          $(".card-body:eq(3)").append(parrafo);

      })


      $("#btnModificarCss").click(function () {
        //modificando estilos css
        //elemento.css(clave, valor)

        $(".cuadrado").css("border-radius","50%")
        .css("background-color", "blue");
          
      })

      $("#btnToggleClass").click(function () {
        
        //this => selecciona al elemento que estoy modificando la funcion actual en este caso el boton
        $(this).toggleClass("btn-sm");
          
      });

    $("#btnDisable").click(function () {

        $("#inputBuscar").attr("disabled", "disabled")
        
    });

    let botonesdelPrimerCard = $(".card:eq(0)").find("button")

    console.log(botonesdelPrimerCard);
    


// });
