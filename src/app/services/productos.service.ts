import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargada = false;
  productos: Producto[] = [];

  constructor(public http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get('https://portafolio-angularjs.firebaseio.com/productos_idx.json')
      .subscribe((response: Producto[]) => {
        this.cargada = true;
        this.productos = response;

        console.log(response);
      })
  }
}
