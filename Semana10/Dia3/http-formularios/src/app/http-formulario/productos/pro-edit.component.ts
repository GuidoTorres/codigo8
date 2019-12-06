import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/Services/productos.service';

@Component({
  selector: 'app-pro-edit',
  templateUrl: './pro-edit.component.html',
  styleUrls: ['./pro-edit.component.css']
})
export class ProEditComponent implements OnInit {

  constructor(public _sProductos: ProductosService) { }

  ngOnInit() {
  }

  


}
