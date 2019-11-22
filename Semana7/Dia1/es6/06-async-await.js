
// Async transfoma una funcion normal en una promesa
//return equivale a la funcion resolve en una promesa
//throw equivales ala funcion catch en una promesa

let buscarCuidad = async (nombre) => {

    if (nombre === "Puno,pe") {
        return "Correcto, se recibio Puno";
    }
    else {

        throw "No se recibio Puno"
    }
}

buscarCuidad("Puno,pe").then(rpta => {
    console.log("then");
    console.log(rpta);


}).catch(error => {
    console.log("catch");
    console.log(error);
});


// =======================================


let consultarApi = async (numero) => {

    switch (numero) {
        case 1:
            return "uno"
            break;
        case 2:
            return "dos"
            break;
        case 3:
            return "tres"
            break;

        default:
            throw "error!"
            break;
    }
}

let devolverMayusculas = async (palabra) =>{

    return palabra.toUpperCase();
}

let consumirApis= async () =>{


    let x = await consultarApi(2);
    let mayus = await devolverMayusculas(x)
    return mayus;
}

consumirApis().then(rpta =>{
    console.log(rpta);
    
})

