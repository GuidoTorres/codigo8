import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public abrir = false;
  URL_BACKEND = env.URL_BACKEND;

  constructor(public _sHttp: HttpClient) { }

  getProductos() {
    let url = `${this.URL_BACKEND}/producto`;
    return this._sHttp.get(url);
  }

  postProducto(objProducto: {imagen: string, precio: number, cantidad: number, nombre: string, codigo: string}){


    let url = `${this.URL_BACKEND}/Producto`;
    let misheader = new HttpHeaders();

    
    misheader.append("Content-Type", "appplication/json");
    // let stringJSON = JSON.stringify(objProducto);

    return this._sHttp.post(url, objProducto, {headers: misheader})

  }


}