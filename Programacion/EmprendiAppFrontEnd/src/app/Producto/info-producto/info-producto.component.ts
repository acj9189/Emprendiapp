import { Component, OnInit } from '@angular/core';
import {Producto} from 'src/app/Modelos/Producto'
@Component({
  selector: 'app-info-producto',
  templateUrl: './info-producto.component.html',
  styleUrls: ['./info-producto.component.css']
})
export class InfoProductoComponent implements OnInit {

  producto:Producto;
  constructor() { }

  //falta coneccion con la base de datos
  ngOnInit() {
  }

}
