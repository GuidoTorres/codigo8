class Persona{

    nombre: string;
    apellido: string;
    edad: number;
    constructor(nombre: string, apellido: string, edad: number){

        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

    }
}

class Trabajador extends Persona{

    cargo: string;
    constructor(nombre: string, apellido: string, edad: number, cargo?:string){
        super(nombre, apellido, edad);
        this.cargo = cargo;
    }

}

let objTra1 = new Trabajador("Guido", "Torres", 25);
console.log(objTra1.nombre);
