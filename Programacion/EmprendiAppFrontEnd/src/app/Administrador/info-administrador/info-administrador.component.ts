import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelos/Usuario';
@Component({
  selector: 'app-info-administrador',
  templateUrl: './info-administrador.component.html',
  styleUrls: ['./info-administrador.component.css']
})
export class InfoAdministradorComponent implements OnInit {

  constructor() { }

  private Administrador = new Usuario();

  ngOnInit() {
  }

}
