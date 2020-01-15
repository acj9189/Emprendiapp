import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelos/Producto'

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent implements OnInit {

  producto:Producto;
  constructor() { }

  ngOnInit() {
  }

}
