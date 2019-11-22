

endpoint = "https://api.openweathermap.org/data/2.5/forecast?q=";


let buscarPorId = (idProducto)=>{

    return new Promise((resolve, reject) =>{

        $.ajax({
            type: 'GET',
            url: this.endpoint +idProducto+ "&appid=a0f485a49eb1127e8769e955eb753c75",
            timeout: 2000,
            data: null,
            success: function (respuesta, textStatus, xhr) {
    
                 resolve(respuesta);

               obtenerData(respuesta);
               


                
            },
            error: function (error) {
              if (error.status == 404) {

                reject("Error")
              }
            },
            beforeSend: function () {
            },
            complete: function(xhr, textStatus){
                
                
            }

            

          });
    
        })
    
    }

    




$("#btnBuscar").click(function (e) { 

    let id = $("#inputId").val();

   

    buscarPorId(id).then((respuesta)=>{

        console.log(respuesta);        
    }).catch((error) =>{

        console.log(error);
        
    });

    
});

let obtenerData = (respuesta) =>{


     let {list: [{0 : dt}] }= respuesta;


    let{city: {name}} = respuesta;
    let {list: [{main: {temp}}]} = respuesta;
    let {list: [{weather: [{description}]}]} = respuesta;


    let fecha = new Date(dt*1000);
    let temperatura = temp -273.15;
    
    let x= Math.round(temperatura)

    $("#Temperatura").append(`<p>La temperatura es: ${x} C°</p> `);
    $("#Temperatura").append("<p>La fecha en "+name+ " es: </p>" + fecha);
    $("#Temperatura").append(`<p>El tiempo en ${name} es: ${description}</p> `);


    var formulario1 = $('#formulario').clone('#card-content', 'col s12 m3', 'card', 'card-image', 'fas fa-cloud-rain fa-5x', 'card-title',
    'card-content', 'card-action');   
    $('#miBody').append(formulario1);

    

    

    



    
               
    


}