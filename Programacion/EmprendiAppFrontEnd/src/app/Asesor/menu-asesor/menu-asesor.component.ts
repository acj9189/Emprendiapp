import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-asesor',
  templateUrl: './menu-asesor.component.html',
  styleUrls: ['./menu-asesor.component.css']
})
export class MenuAsesorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public infoEmpresa(){
    this.router.navigate(['listaEmpresa']);
  }

  public infoSocio(){
    //this.router.navigate(['infoSocio']);
    this.router.navigate(['listaSocio']);
  }

  public infoInversor(){
    //this.router.navigate(['infoInversor']);
    this.router.navigate(['listaInversor']);
  }

   //Concultor
   public infoConsultor(){
    //this.router.navigate(['infoConsultor']);
    this.router.navigate(['listaConsultor']);
  }

   //Asesor
   public infoAsesor(){
    //this.router.navigate(['infoAsesor']);
    this.router.navigate(['listaAsesor']);
  }

  //infoProducto
  public infoProductp(){
    this.router.navigate(['listaProducto']);
  }

  public enviarMensaje(){
    this.router.navigate(['verMensajeAsesor',2]);
  }
}
