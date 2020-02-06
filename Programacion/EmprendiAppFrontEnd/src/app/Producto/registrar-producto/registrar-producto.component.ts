import { Component, OnInit } from '@angular/core';
import { ProductoServicio } from 'src/app/Modelos/ProductoServicio'

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent implements OnInit {

  producto:ProductoServicio;
  constructor() { }

  ngOnInit() {
  }

}
