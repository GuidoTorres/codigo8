class CRUDProductos {
  endpoint = "https://5dc194f16ca10a0014d5d95a.mockapi.io";
  getRecursos(callback) {
    $.ajax({
      type: 'GET',
      url: this.endpoint + "/Producto",
      timeout: 2000,
      data: null,
      success: function (respuesta) {
        // equivale a un readyState 4
        // la data ya llegó en el objeto respuesta
        // console.log(respuesta);
        callback(respuesta);
        $("#articleLoading").attr("hidden", "hidden");
        $("#articleTabla").removeAttr("hidden");
        $("#Crear").attr("hidden");

      },
      error: function (error) {
        console.log(error);
      },
      beforeSend: function () {
        // Aquí podriamos configurar un GIF de carga
        $("#articleLoading").removeAttr("hidden");
        $("#articleTabla").attr("hidden", "hidden");
      },
    })
  }

  /**
   * Función que eliminar un recurso de la BD
   * @param {*} idProducto 
   * @param {*} callback => función callback que se ejecuta
   * cuando un producto se ha eliminado correctamente
   */
  deleteRecursoById(idProducto, callback) {
    let rpta = confirm("¿Está seguro de eliminar el recurso?");
    if (rpta) {
      $.ajax({
        type: 'DELETE',
        url: this.endpoint + "/Producto/" + idProducto,
        timeout: 2000,
        data: null,
        success: function (respuesta) {
          // equivale a un readyState 4
          // la data ya llegó en el objeto respuesta
          // console.log(respuesta);
          console.log(respuesta);
          callback();

        },
        error: function (error) {
          console.log(error);
        },
        beforeSend: function () {
          // Aquí podriamos configurar un GIF de carga
        },
      })
    }
  }

  crearRecurso(Producto, recurso){


    let nombre = $("#inputNombre").val();
    let codigo = $("#inputCodigo").val();
    let cantidad = $("#inputCantidad").val();
    let precio = $("#inputPrecio").val();

    $.ajax({
      type: 'POST',
      url: this.endpoint + "/Producto",
      timeout: 2000,
      data: "Nombre="+nombre+"&Codigo="+codigo+"&Cantidad="+cantidad+"&Precio="+precio,
      success: function (respuesta) {
        // equivale a un readyState 4
        // la data ya llegó en el objeto respuesta
        // console.log(respuesta);



      },
      error: function (error) {
        console.log(error);
      },
      beforeSend: function () {
        // Aquí podriamos configurar un GIF de carga
        $("#Crear").removeAttr("hidden");
        $("#Crear").attr("hidden", "hidden");

      },
    })
  }

  BuscarRecurso(idProducto){



    $.ajax({
      type: 'GET',
      url: this.endpoint + "/Producto/" +idProducto,
      timeout: 2000,
      data: null,
      success: function (respuesta) {
        // equivale a un readyState 4
        // la data ya llegó en el objeto respuesta
        // console.log(respuesta);
      console.log(respuesta);
      

      },
      error: function (error) {
        console.log(error);
      },
      beforeSend: function () {
        // Aquí podriamos configurar un GIF de carga
      },
    })
   
}

getRecursoById(idProducto) {
  $.ajax({
    type: 'GET',
    url: this.endpoint + "/Producto/" + idProducto,
    timeout: 2000,
    data: null,
    success: function (respuesta) {
      // equivale a un readyState 4
      // la data ya llegó en el objeto respuesta
      // console.log(respuesta);
      console.log(respuesta);
      // $("#articleLoading").attr("hidden", "hidden");
      // $("#articleTabla").removeAttr("hidden");
    },
    error: function (error) {
      if (error.status == 404) {
        // ingresaron un id que no existe en BD
        $("#articleLoading").attr("hidden", "hidden");
        $("#articleSad").removeAttr("hidden");
      }
    },
    beforeSend: function () {
      // Aquí podriamos configurar un GIF de carga
    },
  })
}
}
class Utils {

  cuerpoTabla;

  constructor() {
    this.cuerpoTabla = $("#cuerpoTabla");
  }

  dibujarTabla(productos) {
    // borrando el contenido del cuerpo de la tabla
    this.cuerpoTabla.html("");
    productos.forEach((producto, i) => {
      let tr = $(
        `<tr>
        
        <td>${producto.id}</td>
        <td>${producto.Nombre}</td>
        <td>${producto.Codigo}</td>
        <td>${producto.Cantidad}</td>
        <td>${producto.Precio}</td>
        <td><img src="${producto.Imagen}"></td>
      </tr>`);

      let tdAcciones = $("<td></td>");
      let btnAcciones = $(`<button class = "btn tbn-danger">
                          <i class = "fas fa-trash"></i>
                          Eliminar
                          </button> `);

      // configurar el evento Click del boton
      this.configurarBotonEliminar(btnAcciones, producto.id);

      tdAcciones.append(btnAcciones);
      tr.append(tdAcciones);
      this.cuerpoTabla.append(tr);

    })
  }

  configurarBotonEliminar(boton, idProducto) {
    boton.click(() => {
      let objCRUD = new CRUDProductos();
      objCRUD.deleteRecursoById(idProducto, () => {
        // si éste callback se ejecuta, significa que 
        // el producto se ha eliminado
        objCRUD.getRecursos((productos) => {
          this.dibujarTabla(productos);
        })
      });
    });
  }

}







let objUtils = new Utils();
let objCRUD = new CRUDProductos();

$("#btnTraerDatos").click(() => {
  objCRUD.getRecursos((productos) => {
    objUtils.dibujarTabla(productos);
  });
})


$("#btnFormulario").click(() =>{

  
  
  objCRUD.crearRecurso((productos) => {


    
  });


});


$("#btnCrearProducto").click(() =>{

  
  
  $("#Crear").removeAttr("hidden");


    
  });


$("#FormBuscar").submit((event) =>{


  event.preventDefault();
    if($("#inputSearch"). val().trim()= ""){
  
      return;
    }
  $("seccionResultados article").attr("hidden", "hidden");

  $("$articleLoading").removeAttr("hidden");


  objCRUD.BuscarRecurso($("#inputSearch").val());
})












// let postRecurso = () => {

//   // Cómo obtener el value de un input
//   // $("#inputEmail").val();
//   // Cómo se settea el value de un input
//   // $("#inputEmail").val('el valor del input');

//   $.ajax({
//     type: 'POST',
//     url: 'SU URL EN MOCKAPI',
//     timeout: 4000,
//     data: /*AQUI SE MANDA UN JSON en string ( stringify) */,
//     contentType: 'application/json',
//     success: function (respuesta) {
//       // equivale a un readyState 4
//       // la data ya llegó en el objeto respuesta
//       console.log(respuesta);
//     },
//     error: function (error) {
//       console.log(error);
//     },
//     beforeSend: function () {
//       // Aquí podriamos configurar un GIF de carga
//     }
//   })

// }















// class CRUDProductos {

//   endpoint = "https://5dc194f16ca10a0014d5d95a.mockapi.io";

//   getRecursos (callback){


//     $.ajax({
      
//       type: 'GET',
//       url: this.endpoint + "/Producto",
//       timeout: 2000,
//       //no se envia nada por eso data es null
//       data: null,
//       success: function (respuesta) {
//         // equivale a un readyState 4
//         // la data ya llegó en el objeto respuesta
//         $("#articleLoading").attr("hidden", "hidden");
//         $("#articleTabla").removeAttr("hidden")
//         callback(respuesta);
//       },
//       error: function (error) {
//         console.log(error);
//       },
//       beforeSend: function () {
//         // Aquí podriamos configurar un GIF de carga
//         $("#articleLoading").removeAttr("hidden");
//         $("#articleTabla").attr("hidden", "hidden");
        
//       }
//     })

//   } 


//   deleteRecursobyId(idProducto, callback){

//    let rpta= confirm("Estas Seguro de Eliminar el Recurso?")
//    if(rpta){

//     $.ajax({
      
//       type: 'DELETE',
//       url: this.endpoint + "/Producto/" + idProducto,
//       timeout: 2000,
//       //no se envia nada por eso data es null
//       data: null,
//       success: function (respuesta) {
//         // equivale a un readyState 4
//         // la data ya llegó en el objeto respuesta
//         // $("#articleLoading").attr("hidden", "hidden");
//         // $("#articleTabla").removeAttr("hidden")
//         // // callback(respuesta);
//         console.log(respuesta);
//         callback();
//         // this.getRecursos((productos) =>{

//         //   let objUtils = new Utils();
//         //   objUtils.dibujarTabla(productos);
       
//       },
//       error: function (error) {
//         console.log(error);
//       },
//       beforeSend: function () {
//         // Aquí podriamos configurar un GIF de carga
//         // $("#articleLoading").removeAttr("hidden");
//         // $("#articleTabla").attr("hidden", "hidden");
        
//       }
//     })

//    }
//   }

//   postRecurso(onjProducto){


//   }

// }


// class Utils{
//   cuerpoTabla;
//     constructor(){


//       this.cuerpoTabla = $("#cuerpoTabla");
//     }
//     dibujarTabla(productos){

//       // Borrando el contenido del cuerpo de la tabla
//       this.cuerpoTabla.HTML = ("");
//       productos.forEach((productos, i) => {
        
//         let tr = $(
//           `<tr>
          
//           <td>${productos.id}</td>
//           <td>${productos.Nombre}</td>
//           <td>${productos.Codigo}</td>
//           <td>${productos.Cantidad}</td>
//           <td>${productos.Precio}</td>
//           <td><img src="${productos.Imagen}"></td>
//         </tr>`);
  
//         let tdAcciones = $("<td></td>");
//         let btnAcciones = $(`<button class = "btn tbn-danger">
//                             <i class = "fas fa-trash"></i>
//                             Eliminar
//                             </button> `);

//       // configurar evento click delboton

//       this.configurarBotonEliminar(btnAcciones, productos.id)
  
  
//       tdAcciones.append(btnAcciones);
//       tr.append(tdAcciones);
//       this.cuerpoTabla.append(tr);
//       });
//     }

//     configurarBotonEliminar(boton, idProducto){

//       boton.click(()=>{

//         let objCrud = new CRUDProductos();
//         objCRUD.deleteRecursobyId(idProducto, () =>{
//           // Si este callback se ejecuta significa que el producto se a elimindao
//           objCRUD.getRecursos((productos) =>{

//             this.dibujarTabla(productos);

//           })
//         });
        
//       })

//     }
//   }


// let objUtils = new Utils();
// let objCRUD = new CRUDProductos();

// $("#btnTraerDatos").click (() =>{

//   objCRUD.getRecursos((productos) =>{
//   objUtils.dibujarTabla(productos);
//   });
// })

// objCRUD.getRecursos((productos) =>{

//     objUtils.dibujarTabla(productos);

// });



 

// let getRecursos = () => {

//     $.ajax({
//       type: 'GET',
//       url: 'SU URL EN MOCKAPI',
//       timeout: 4000,
//       data: null,
//       success: function (respuesta) {
//         // equivale a un readyState 4
//         // la data ya llegó en el objeto respuesta
//         console.log(respuesta);
//       },
//       error: function (error) {
//         console.log(error);
//       },
//       beforeSend: function () {
//         // Aquí podriamos configurar un GIF de carga
//       }
//     })
  
//   }
  
  
//   let postRecurso = () => {
  
//     // Cómo obtener el value de un input
//     // $("#inputEmail").val();
//     // Cómo se settea el value de un input
//     // $("#inputEmail").val('el valor del input');
  
//     $.ajax({
//       type: 'POST',
//       url: 'SU URL EN MOCKAPI',
//       timeout: 4000,
//       data: /*AQUI SE MANDA UN JSON en string ( stringify) */,
//       contentType: 'application/json',
//       success: function (respuesta) {
//         // equivale a un readyState 4
//         // la data ya llegó en el objeto respuesta
//         console.log(respuesta);
//       },
//       error: function (error) {
//         console.log(error);
//       },
//       beforeSend: function () {
//         // Aquí podriamos configurar un GIF de carga
//       }
//     })
  
//   }