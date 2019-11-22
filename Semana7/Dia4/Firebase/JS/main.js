import { firebaseConfig } from './env/config.js';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//   Instanciar la base de datos
var database = firebase.database();
let storage = firebase.storage();
let updateCancha = (objCancha) => {

  let id = $("#idCancha").text();
  console.log(id);
  database.ref("canchas/"+id).set({
    direccion: objCancha.direccion,
    nombre: objCancha.nombre,
    lat: objCancha.lat,
    lng: objCancha.lng,
    nroCanchas: objCancha.nroCanchas,
    telefono: objCancha.telefono
  }, function (error) {
    if (error) {
      console.log(error);

    } else {

      Swal.fire(
        'Exito!',
        'Se edito correctamente la cancha',
        'success'
      )

    }
    

  });


}

let postCancha = (objCancha) => {

  let key = database.ref("canchas").push().key;
  firebase.database().ref(`canchas/${key}`).set(objCancha).then(() => {

    swal.fire({

      tittle: 'Exito!',
      text: 'Canchita creada correctamente',
      icon: 'success'
    });
    $("#modalCrearCancha").modal("hide");
    document.getElementById("frmCrearCancha").reset();



  })
    .catch(() => {

      swal.fire({

        tittle: 'Ups!',
        text: 'Se ha producido un error',
        icon: 'error'
      })

    })
}

let deleteCancha = (idCancha) =>{
  database.ref("canchas/"+idCancha).remove().then(function () {
    console.log("Se elimino la cancha");
    
    
  }).catch(function (error) {
    console.log(errorbt);
    
    })
}

let subirArchivo = (objCancha) =>{

  var storageRef = storage.ref();
  var archivo = $("#inputFoto").prop('files')[0];
  var nombreArchivo = archivo.name;
  var nombreFinal = +(new Date())+ '-' + nombreArchivo;
  let metada = {
    contentType: archivo.type 
  }
  storageRef.child("canchitas/"+nombreFinal).put(archivo, metada).then((respuesta)=>{

    //No sirve par obtneer la url de descarga de la imagen
    //DEvuelve otra pormesa
    return respuesta.ref.getDownloadURL();
    
  }).then((url)=>{
    console.log(url);
    objCancha.url = url;
    postCancha(objCancha);
    
  }).catch((error)=>{
    console.log(error);
    
  })
}


//SCRIPT PRAR CANCHAS HTML
if (document.location.href.indexOf("canchas.html") != -1) {

  //Estoy en la pagina canchas html
  $("#btnAbrirModal").click(function () {

    $("#modalCrearCancha").modal("show");
  })

  $("#frmCrearCancha").submit(function (event) {

    event.preventDefault();

    // Aramar el objeto JSON

    let objCancha = {

      nombre: $("#inputNombre").val(),
      direccion: $("#inputDireccion").val(),
      lat: $("#inputLatitud").val(),
      lng: $("#inputLongitud").val(),
      nroCanchas: $("#inputNroCanchas").val(),
      telefono: $("#inputTelefono").val()





    }

    subirArchivo(objCancha);
    // postCancha(objCancha);

  })


  $("#btnEditarCancha").click(function (event) {
    event.preventDefault();

    let objCancha = {

      nombre: $("#EditinputNombre").val(),
      direccion: $("#EditinputDireccion").val(),
      lat: $("#EditinputLatitud").val(),
      lng: $("#EditinputLongitud").val(),
      nroCanchas: $("#EditinputNroCanchas").val(),
      telefono: $("#EditinputTelefono").val()
  
    }

    updateCancha(objCancha);



  })

  $("#btnEliminarCancha").click(function (event) { 

    event.preventDefault()
    deleteCancha(objCancha)
  })






  let dibujarTabla = (arregloCanchas) => {

    var tabla = $("#tablaCanchas").DataTable({
      data: arregloCanchas,
      destroy: true, //sirve para reinicializar la tabla y tenerla activa en tiempo real
      columns: [
        { title: "Id", data: 'id' },
        { title: "Nombre", data: 'nombre' },
        { title: "Direccion", data: 'direccion' },
        { title: "Nro. Canchas", data: 'nroCanchas' },
        { title: "Latitud", data: 'lat' },
        { title: "Longitud", data: 'lng' },
        { title: "Telefono", data: 'telefono' },
        { title: "Acciones", defaultContent: '<button class = "btn btn-secondary"> Acciones </button>' },
        { title: "Image", data: 'url', render:function(data){"<img src="+data+">";}}
      ]
    });
    // console.log(tabla.rows().data());

    $("#tablaCanchas tbody").on('click', 'button', function () {

      var data = tabla.row($(this).parents('tr')).data()
      console.log(data);

      $("#modalEditarCancha").modal("show");
      $("#idCancha").text(data.id);
      $("#EditinputNombre").val(data.nombre);
      $("#EditinputDireccion").val(data.direccion);
      $("#EditinputNroCanchas").val(data.nroCanchas);
      $("#EditinputTelefono").val(data.telefono);

      $("#EditinputLatitud").val(data.lat);
      $("#EditinputLongitud").val(data.lng);





    })

  }

  let traerDatos = () => {

    // database.ref("canchas").once('value').then((dataSnapshot) => {

    //   let arregloCanchas = [];
    //   dataSnapshot.forEach((cancha)=>{

    //     arregloCanchas.push({

    //       // ... hace una copia exacta del objeto
    //       ...cancha.val(),
    //       id: cancha.key
    //     })

    //   })
    //   dibujarTabla(arregloCanchas);        


    // })

    database.ref("canchas").on('value', (dataSnapshot) => {


      let arregloCanchas = [];
      dataSnapshot.forEach((cancha) => {

        arregloCanchas.push({

          // ... hace una copia exacta del objeto
          ...cancha.val(),
          id: cancha.key
        })

      })
      dibujarTabla(arregloCanchas);


    })


  }

  traerDatos();

}


