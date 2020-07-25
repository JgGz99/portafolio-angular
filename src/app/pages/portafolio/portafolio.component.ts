import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ProductoInterface } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public productosService: ProductosService) { }

  ngOnInit(): void {
  }

}
