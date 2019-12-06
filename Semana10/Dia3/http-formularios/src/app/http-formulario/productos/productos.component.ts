
import { ProductosService } from './../../Services/productos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl, NgForm } from '@angular/forms';



declare var $: any;

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit, OnDestroy {
  productos: any[] = [];
  cargado: boolean = false
  subscriptor: Subscription;

  constructor(public _sProductos: ProductosService) { }

  ngOnInit() {
    this.traerProductos();
  }
  traerProductos() {
    this.subscriptor = this._sProductos.getProductos().subscribe((data: any) => {
      this.cargado = true
      this.productos = data
      console.log(data);

    }, (error: any) => {
      console.log(error);
    });
  }
  ngOnDestroy() {
    this.subscriptor.unsubscribe()
    console.log("Destruido");

  }

  abrirmodalproducto() {
    $("#modalabrir").modal("show")
  }
  crearproducto(formulariocrear: NgForm, imagen: FormControl) {
    console.log(imagen);

    if (formulariocrear.valid) {
      console.log(formulariocrear.value);
      this._sProductos.postProducto(formulariocrear.value).subscribe((producto: any) => {
        if (producto.id) {
          this.formulariocancelar(formulariocrear)
          this.cargado = false;
          this.traerProductos();
        }
        console.log(producto);
      }, (error: any) => {
        console.log(error);
      })
    }
  }
  formulariocancelar(formulario: NgForm) {
    formulario.reset();
    $("#modalabrir").modal("hide")
  }


}

