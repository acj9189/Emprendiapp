import { Component, OnInit } from '@angular/core';
import {ProductoServicio} from 'src/app/Modelos/ProductoServicio'
@Component({
  selector: 'app-info-producto',
  templateUrl: './info-producto.component.html',
  styleUrls: ['./info-producto.component.css']
})
export class InfoProductoComponent implements OnInit {

  producto:ProductoServicio;
  constructor() { }

  //falta coneccion con la base de datos
  ngOnInit() {
  }

}
