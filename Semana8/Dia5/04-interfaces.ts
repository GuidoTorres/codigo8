interface iPersona{

    nombre: string;
    apellido : string;
    edad: number;
    apodo?: string;
}


let imprimirDatosPersonales = (persona: iPersona) =>{

    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Apellido:${persona.apellido}`);
    console.log(`Edad: ${persona.edad}`);
    
    
    
}




let objGuido: iPersona = {

    nombre: "Guido",
    apellido: "Torres",
    edad : 25
}