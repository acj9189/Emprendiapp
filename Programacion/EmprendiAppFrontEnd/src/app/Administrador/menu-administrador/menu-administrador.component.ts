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

  //Empresa
  public infoEmpresa(){
    //this.router.navigate(['infoEmpresa']);
    this.router.navigate(['listaEmpresa']);
  }

  public removerEmpresa(){
    this.router.navigate(['removerEmpresa']);
  }

  public editEmpresa(){
    this.router.navigate(['editEmpresa']);
  }

  public regEmpresa(){
    this.router.navigate(['regEmpresa']);
  }
  //--------
  //adminstrador
  public infoAdmin(){
    //this.router.navigate(['infoAdministrador']);
    this.router.navigate(['listaAdmin']);
  }

  public agregarAdministrador(){
    this.router.navigate(['agregarAdministrador']);
  }

  public removerAdministrador(){
    this.router.navigate(['removerAdministrador']);
  }

  public editarAdministradr(){
    this.router.navigate(['editarAdministradr']);
  }
  public listarAdministradorEdit(){
    this.router.navigate(['listarAdministradorEdit']);
  }

  //--------
  //verificar si es necesaria aqui producto
  public infoProducto(){
    this.router.navigate(['infoProducto'])
  }

  public removerProducto(){
    this.router.navigate(['removerProducto']);
  }

  public registroProducto(){
    this.router.navigate(['registroProducto']);
  }

  public editarProducto(){
    this.router.navigate(['editarProducto']);
  }
  //-----------------

  //Socio
  public infoSocio(){
    //this.router.navigate(['infoSocio']);
    this.router.navigate(['listaSocio']);
  }

  public registrarSocio(){
    this.router.navigate(['registrarSocio']);
  }

  public editarSocio(){
    this.router.navigate(['editarSocio']);
  }

  public removerSocio(){
    this.router.navigate(['removerSocio']);
  }



  //--------
  //Inversor
  public infoInversor(){
    //this.router.navigate(['infoInversor']);
    this.router.navigate(['listaInversor']);
  }

  public regInversor(){
    this.router.navigate(['regInversor']);
  }

  public editarInversor(){
    this.router.navigate(['editarInversor']);
  }

  public removerInversor(){
    this.router.navigate(['removerInversor']);
  }

  //Concultor
  public infoConsultor(){
    //this.router.navigate(['infoConsultor']);
    this.router.navigate(['listaConsultor']);
  }

  public registroConsultor(){
    this.router.navigate(['registroConsultor']);
  }

  public editarConsultor(){
    this.router.navigate(['editarConsultor']);
  }

  public remverConsultor(){
    this.router.navigate(['remverConsultor']);
  }

  //-------------
  //Asesor
  public infoAsesor(){
    //this.router.navigate(['infoAsesor']);
    this.router.navigate(['listaAsesor']);
  }

  public registroAsesor(){
    this.router.navigate(['registroAsesor']);
  }

  public editarAsesor(){
    this.router.navigate(['editarAsesor']);
  }

  public removerAsesor(){
    this.router.navigate(['removerAsesor']);
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

  public enviarMensaje(){
    this.router.navigate(['enviarMensaje']);
  }
}
