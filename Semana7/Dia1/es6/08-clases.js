class Persona{

    _nombre;
    _apellido;
    _edad;

    constructor(nom, ape, ed){

        this._nombre = nom;
        this._apellido = ape;
        this._edad = ed;
    }

    get nombre (){
        return this._nombre;
    }
    set nombre(nom){

        this._nombre = nom
    }

    static imprimirAnioActual(){
       
        console.log((new Date()).getFullYear());
        
    }
}


let objJuan = new Persona("Juan", "Rodriguez", 23);


console.log(objJuan.nombre);

objJuan.nombre = "AAAA"

console.log(objJuan.nombre);

Persona.imprimirAnioActual();