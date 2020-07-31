import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  productos: ProductoInterface[] = [];
  productoFiltrado: ProductoInterface[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }
 
  private cargarProductos() {
    return new Promise((resolve, reject) => {
      this.http
        .get('https://angular-html-77b70.firebaseio.com/productos_idx.json')
        .subscribe((resp: ProductoInterface[]) => {
          this.productos = resp;
          this.cargando = false;
          resolve();
        });
    });
  }

  getProducto(id: string) {
    return this.http.get(
      `https://angular-html-77b70.firebaseio.com/productos/${id}.json`
    );
  }

  buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      // cargar productos
      this.cargarProductos().then(() => {
        // ejecutar despues de tener los productos
        // Aplicar filtro
        this.filtrarProductos(termino);
      });
    } else {
      // aplicar el filtro
      this.filtrarProductos(termino);
    }

    // console.log(this.productoFiltrado);
  }

  private filtrarProductos(termino: string) {
    // console.log(this.productos);
    this.productoFiltrado = [];
    termino = termino.toLowerCase();
    this.productos.forEach((prod) => {
      const tituloLower = prod.titulo.toLowerCase();
      if (
        prod.categoria.indexOf(termino) >= 0 ||
        tituloLower.indexOf(termino) >= 0
      ) {
        this.productoFiltrado.push(prod);
      }
    });
  }
}
