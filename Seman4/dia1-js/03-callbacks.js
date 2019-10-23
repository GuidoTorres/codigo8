
let f1 = (f2) =>{

    f2("Cualquier mensaje");
}

f1((rpta) => { 
    console.log(rpta);
 });


 // filter(funcion) => retorna una arreglo de elemetnos que cumpla con cierta condcion

 //Retrone el elemento de la iteracion en la que cumpla la condicion

let notas = [13,11,14,20,5,8,20,14]

 let notasPares = notas.filter((elemento, i) =>{


    if (elemento % 2 == 0){

        return elemento ;

    }
 });

 console.log(notasPares);