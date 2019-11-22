
let inputBuscar = document.getElementById("inputBuscar");

let btnBuscar = document.getElementById("btnBuscar");



let buscarCuidadPorNombre = (nombre) =>{


    return new Promise((resolve, reject)=>{

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () =>{

            if(xhr.readyState === 4 && xhr.status === 200 ){

                resolve(xhr.responseText);   
            }
            if(xhr.readyState === 4 && xhr.status === 404 ){

                resolve("No se a encontrado la cuidad");   
            }
        }

        xhr.open("GET",`https://api.openweathermap.org/data/2.5/forecast?q=${nombre}&appid=a0f485a49eb1127e8769e955eb753c75`)
        xhr.send(null)
    }) 

}


// Funcion que recibe un objeto como el que retorna openweather api 
// formatea la data y retorna la informacion de la cuiadad buscada, en un proceso asincrono
let obtenerInfo = (jsonRPTA) =>{


    console.log(`PAIS => ${jsonRPTA.city.country}`);
    console.log(`CUIDAD => ${jsonRPTA.city.name}`);
    console.log(`POBLACION=> ${jsonRPTA.city.population}`);
    console.log(`LATITUD => ${jsonRPTA.city.coord.lat}`);
    console.log(`LONGITUD => ${jsonRPTA.city.coord.lon}`);

    
    

    return new Promise( (resolve, reject) =>{


        setTimeout(() =>{

            let objInfo ={

                pais: country,
                cuidad: name,
                poblacion:population,
                latitud: lat,
                longitud:lon
            }
            resolve(objInfo);
        }, 1000)
    })

}

btnBuscar.onclick = () =>{


    buscarCuidadPorNombre(inputBuscar.value).then((rpta)=>{

        let jsonRPTA = JSON.parse(rpta)
        return obtenerInfo(jsonRPTA);
            
        }).then((objInfo) => {
            console.log(objInfo);
            
        })

    
}