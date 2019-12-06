import { ProductosService } from './../../../../../../Dia2/http-formularios/src/app/services/productos.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() objProducto;
  constructor(public _sProducto: ProductosService ) {}

  ngOnInit() {
  }
  cambiarServicioAbrir(){
    this._sProducto.abrir = true;
  }
}


