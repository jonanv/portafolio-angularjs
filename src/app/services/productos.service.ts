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
    return new Promise((resolve, reject) => {
      this.http.get('https://portafolio-angularjs.firebaseio.com/productos_idx.json')
        .subscribe((response: Producto[]) => {
          this.productos = response;
          this.cargando = false;
          // console.log(response);
          resolve();
        });
    });
  }

  getProducto(id: string) {
    let producto = this.http.get(`https://portafolio-angularjs.firebaseio.com/productos/${id}.json`);
    return producto;
  }

  buscarProducto(termino: string) {
    if(this.productos.length === 0) {
      //Cargar productos
      this.cargarProductos().then(() => {
        //Ejecutar despues de tener productos
        //Aplicar filtro
        this.filtrarProductos(termino);
      });
    }
    else {
      //Aplicar el filtro
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string) {
    // console.log(this.productos);
    this.productosFiltrado = [];
    termino = termino.toLowerCase();

    this.productos.forEach(prod => {
      const categoriaLower = prod.categoria.toLowerCase();
      const tituloLower = prod.titulo.toLowerCase();

      if(categoriaLower.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.productosFiltrado.push(prod);
      }
    });
  }
}
