import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from './../../environments/environment';



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
};
  URL_BACKEND = env.URL_BACKEND;

  constructor(public _sHttp: HttpClient) { }

  getProductos() {
    let url = `${this.URL_BACKEND}/producto`
    return this._sHttp.get(url)
  }
  postProducto(objProducto: { imagen: string, precio: number, codigo: number, cantidad: number, nombre: string }) {
    let url = `${this.URL_BACKEND}/producto`
    let misheaders = new HttpHeaders()
    misheaders.append("Content-type", "application/json");

    return this._sHttp.post(url, objProducto, { headers: misheaders })
  }

}
