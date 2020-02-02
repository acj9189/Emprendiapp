import { Component, OnInit } from '@angular/core';
import { SocioInversorServiceService } from "src/app/Service/socio-inversor-service.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SocioInversor } from 'src/app/Modelos/SocioInversor';

@Component({
  selector: 'app-info-socio',
  templateUrl: './info-socio.component.html',
  styleUrls: ['./info-socio.component.css']
})
export class InfoSocioComponent implements OnInit {

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

}
