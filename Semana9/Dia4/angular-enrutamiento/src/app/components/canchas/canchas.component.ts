import { CanchasService } from './../../services/canchas.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-canchas',
  templateUrl: './canchas.component.html',
  styleUrls: ['./canchas.component.css']
})
export class CanchasComponent implements OnInit, OnDestroy {

  listaCanchas: Array<any> = []
  // la inyeccion por dependencia es incluir a un servicio en elconstructor de un componente
  constructor(public _sCanchas: CanchasService) { 
    console.log("constructor");
    //funcion que se ejecuta cuando un componente va a aparecer
    // Ejm esta funcion debe ser utilizada para inicializar varibales por ejemplo
    
  }

  ngOnInit() {
    console.log("ngOnInit");
    // Funcion que se ejecuta luego de que el dom del componente se haya cargado
    // Ejm esta funcion debe ser usada para manipular elementos del dom porque se lo manipulamos
    // en el constructor el dom aun no existe
    console.log("Llamando a las canchas");
    this._sCanchas.getCanchas().then((canchas: any)=>{
      this.listaCanchas = canchas;
    });
    
    
    
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
    // Funcion que se ejecuta cuando un componenete va a desaparecer del dom actual
    // Ejm Esta funcion debe ser usada para limpiar la memoria ocupada por algunas VariableAs
    // cancelar evntos de suscripccion
    
  }

}
