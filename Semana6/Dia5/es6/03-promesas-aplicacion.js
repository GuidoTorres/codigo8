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

                let {list: [{dt}]} = respuesta;
                let{city: {name}} = respuesta;

                let fecha = new Date(dt*1000);

                let {list: [{main: {temp}}]} = respuesta;

                let {list: [{weather: [{description}]}]} = respuesta;


                let temperatura = temp -273.15;


                
            
                $("#Temperatura").append("<p>La temperatura es: </p>"+ temperatura +"C°");
                $("#Temperatura").append("<p>La fecha en "+name+ " es: </p>" + fecha);
                $("#Temperatura").append("<p>El tiempo en  "+name+  " es: </p>" + description);


                
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






