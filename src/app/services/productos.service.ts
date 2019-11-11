import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor(public http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get('https://portafolio-angularjs.firebaseio.com/productos_idx.json')
      .subscribe((response: Producto[]) => {
        this.productos = response;
        this.cargando = false;

        // setTimeout(() => {
        //   this.cargando = false;
        // }, 1000);

        // console.log(response);
      });
  }

  getProducto(id: string) {
    let producto = this.http.get(`https://portafolio-angularjs.firebaseio.com/productos/${id}.json`);
    return producto;
  }

  buscarProducto(termino: string) {
    this.productosFiltrado = this.productos.filter(productos => {
      return true;
    });
    console.log(this.productosFiltrado);
  }
}
