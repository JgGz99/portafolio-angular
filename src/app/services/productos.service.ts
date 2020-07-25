import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: ProductoInterface[] = [];
  cargando = true;

  constructor(private http: HttpClient) { 

this.cargarProductos();
  }

private cargarProductos(){
  this.http.get('https://angular-html-77b70.firebaseio.com/productos_idx.json').subscribe( (resp: ProductoInterface[]) => {
    this.productos = resp;
    console.log(resp);
    this.cargando = false;
  });
}

}
