function decorador(){

    return function(clase){

        clase.prototype.hoy = (new Date()).getDay();  
        clase.prototype.saludar=function(){
            console.log("Estoy saludando");
            


        }
    }
}

@decorador()
class Aula{

    capacidad: number;
    tipo: string;
    constructor(capacidad: number, tipo: string){

        this.capacidad = capacidad;
        this.tipo = tipo;
    }

    imprimirDatos(){
        console.log(`Capacidad: ${this.capacidad}`);
        console.log(`Tipo: ${this.tipo}`);

    }

 
}
let objAula = new Aula(80, "Laboratorio");
console.log(objAula.hoy);
objAula.saludar();
