
//Constante de PI
let pi = Math.PI
//COnstante de Euler
let euler = Math.E
console.log(euler)
console.log(pi)

//Redonde dea al piso
let piso = Math.floor(3.45);

let techo = Math.ceil(3.6)
console.log(piso);
console.log(techo);

console.log(Math.sqrt(9))
console.log(Math.random())

function randomConParametros(min, max){

    //Math.round => redondea un numero
    return Math.round(Math.random() * (max-min) + min);
}

let aleatorio = randomConParametros(2,5 )
console.log(aleatorio)




