import { Component, OnInit } from '@angular/core';
import { SocioInversorServiceService } from "src/app/Service/socio-inversor-service.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SocioInversor } from 'src/app/Modelos/SocioInversor';

@Component({
  selector: 'app-remover-socio',
  templateUrl: './remover-socio.component.html',
  styleUrls: ['./remover-socio.component.css']
})
export class RemoverSocioComponent implements OnInit {

  constructor(private service:SocioInversorServiceService, private router:Router,private rutaActiva: ActivatedRoute) { }
  private id:number;
  private socio:SocioInversor;
  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params.id;
    this.service.infoSocio(this.id).subscribe(data=>{
      this.socio=data;
    });
  }

  public mostrar(){
    console.log(this.socio);
  }

  public retorno(){
    this.router.navigate(['listaSocio']);
  }

  public eliminar(){
    this.service.removeSocio(this.id).subscribe(data=>{
      this.socio=data;
    });
    //this.router.navigate(['listaSocio']);
    this.retorno();
  }
}
