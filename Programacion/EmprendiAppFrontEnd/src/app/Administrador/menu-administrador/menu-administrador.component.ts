import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.css']
})
export class MenuAdministradorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public infoEmpresa(){
    this.router.navigate(['infoEmpresa']);
  }

  public infoAdmin(){
    this.router.navigate(['infoAdministrador']);
  }

  //verificar si es necesaria aqui
  public infoProducto(){
    this.router.navigate(['infoProducto'])
  }

  public infoSocio(){
    this.router.navigate(['infoSocio']);
  }

  public infoInversor(){
    this.router.navigate(['infoInversor']);
  }

  public infoConsultor(){
    this.router.navigate(['infoConsultor']);
  }

  public infoAsesor(){
    this.router.navigate(['infoAsesor']);
  }

  public inicio(){
    this.router.navigate(['']);
  }

  public Listar(){
    this.router.navigate(["listar"]);
  }

  public Agregar(){
    this.router.navigate(["add"]);
  }

  public edit(){
    this.router.navigate(["edit"]);
  }

  public Principal(){
    this.router.navigate(["principal"]);
  }  

  public buscarFiltro(){
    this.router.navigate(['buscarFiltro']);
  }

  public enviarMensaje(){
    this.router.navigate(['enviarMensaje']);
  }
}
