let buscarPersonaPorNombre = (nombre) =>{

    // creando una promesa(configuracion)

    return new Promise((resolve, reject) =>{
    // Hacer un proceso asincrono
        // resolve();
    
        setTimeout(()=>{
    
            resolve("Exito!");
    
        },1500);
    
    });

}
// Consumiendo una promesa

buscarPersonaPorNombre("Juan").then((mensaje)=>{

    console,console.log(mensaje);
    
    console.log("La promesa se resolvio");
    
}).catch(()=>{

    console.log("La promesa tuvo un error");
    
});

