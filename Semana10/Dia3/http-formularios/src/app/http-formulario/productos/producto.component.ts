import { Component, OnInit,Input } from '@angular/core';
import { ProductosService } from 'src/app/Services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() producto;
  constructor(public _sProductos:ProductosService) { }

  ngOnInit() {
  }

  cambiarservicioabrir(objProducto){
    this._sProductos.abrir=true;
    this._sProductos.productoEditar = objProducto;
  }

}
