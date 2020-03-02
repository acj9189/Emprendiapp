import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mensaje } from 'src/app/Modelos/Mensaje';
@Component({
  selector: 'app-menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.css']
})
export class MenuAdministradorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  //Empresa
  public infoEmpresa(){
    this.router.navigate(['listaEmpresa']);
  }
  //--------
  //adminstrador
  public infoAdmin(){
    //this.router.navigate(['infoAdministrador']);
    this.router.navigate(['listaAdmin']);
  }

  public listarAdministradorEdit(){
    this.router.navigate(['listarAdministradorEdit']);
  }
 

  //Socio
  public infoSocio(){
    //this.router.navigate(['infoSocio']);
    this.router.navigate(['listaSocio']);
  }

  //--------
  //Inversor
  public infoInversor(){
    //this.router.navigate(['infoInversor']);
    this.router.navigate(['listaInversor']);
  }

  //Concultor
  public infoConsultor(){
    //this.router.navigate(['infoConsultor']);
    this.router.navigate(['listaConsultor']);
  }

  //-------------
  //Asesor
  public infoAsesor(){
    //this.router.navigate(['infoAsesor']);
    this.router.navigate(['listaAsesor']);
  }


  //infoProducto
  public infoProductp(){
    this.router.navigate(['listaProducto']);
  }

  //------------
  public inicio(){
    this.router.navigate(['']);
  }


  //deve de estar aqui??
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
//se debe mirara mas
  public buscarFiltro(){
    this.router.navigate(['buscarFiltro']);
  }


  public mensajes(){
    this.router.navigate(['verMensajeAdmin',3]);
  }

  public enviarMensaje(){
    this.router.navigate(['enviarMensaje']);
  } 
}
