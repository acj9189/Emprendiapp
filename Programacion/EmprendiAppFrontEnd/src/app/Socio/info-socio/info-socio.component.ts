import { Component, OnInit, Input } from '@angular/core';
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
  @Input() private id:number;
  private socio:SocioInversor;
  private redes:String[];

  ngOnInit() {
    //this.id=this.rutaActiva.snapshot.params.id;
    if(this.id>-1){
    this.service.infoSocio(this.id).subscribe(data=>{
      this.socio=data;
      this.separaRedes(this.socio.usuario.redesSociales);
    });
  }
  }

  private separaRedes(redes:String){
    this.redes=redes.split(";")
  }
  
  public mostrar(){
    console.log(this.socio);
    console.log(this.id);
  }

  public retorno(){
    this.router.navigate(['listaSocio']);
  }

}
