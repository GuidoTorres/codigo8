import { FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductosService } from './../../services/productos.service';
import { Subscription } from 'rxjs';
{FormControl}
// declarando variable $ como simbolo de jquery
declare var $: any;

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, OnDestroy {

  subscriptor: Subscription;
  productos: Array<any> = [];
  cargado = false;
  constructor(public _sProductos: ProductosService) { }

  ngOnInit() {
    this.traerProductos();
  }

  abrirModalCrearProducto(){
    $("#modalCrearProducto").modal("show");
  }

  crearProducto(formularioCrear: FormControl){

    
    if (formularioCrear.valid){

      console.log(formularioCrear.value);
      this._sProductos.postProducto(formularioCrear.value).subscribe((rpta: any)=>{
        console.log(rpta);
        
      }, (error: any)=>{
        console.log(error);
        
      })
      
    }
  }

  cancelar(formularioCrear: FormControl){
    formularioCrear.reset()

    $("#modalCrearProducto").modal("hide");

  }

  traerProductos() {
    this.subscriptor = this._sProductos.getProductos().subscribe((data: any) => {
      this.productos = data;
      this.cargado = true;
    }, (error: any) => {

    });
  }

  ngOnDestroy() {
    this.subscriptor.unsubscribe();
  }
}
