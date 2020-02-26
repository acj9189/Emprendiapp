import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-socio',
  templateUrl: './menu-socio.component.html',
  styleUrls: ['./menu-socio.component.css']
})
export class MenuSocioComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  public infoEmpresa(){
    this.router.navigate(['listaEmpresa']);
  }

  public infoSocio(){
    this.router.navigate(['listaSocio']);
  }

  public infoInversor(){
    this.router.navigate(['listaInversor']);
  }

   //Concultor
   public infoConsultor(){
    this.router.navigate(['listaConsultor']);
  }

   //Asesor
   public infoAsesor(){
    this.router.navigate(['listaAsesor']);
  }

  //infoProducto
  public infoProductp(){
    this.router.navigate(['listaProducto']);
  }


}
