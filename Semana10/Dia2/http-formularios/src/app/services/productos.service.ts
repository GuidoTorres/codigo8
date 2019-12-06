import { environment as env } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

public abrir = false;
public productoEditar = {
  cantidad: 0,
  nombre: '',
  precio: 0,
  imagen: '',
  codigo: ''
}

  URL_BACKEND = env.URL_BACKEND;

  constructor(public _sHttp: HttpClient) { }
  getProductos(){

    
    let url = `${this.URL_BACKEND}/Producto`;
    return this._sHttp.get(url);

  }
}
