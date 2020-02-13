import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsesorConultor } from 'src/app/Modelos/AsesorConsultor';
import { AsesorConsultorServieService } from 'src/app/Service/asesor-consultor-servie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-consultor',
  templateUrl: './info-consultor.component.html',
  styleUrls: ['./info-consultor.component.css']
})
export class InfoConsultorComponent implements OnInit {

   consultor:AsesorConultor;
  constructor(private rutaActiva:ActivatedRoute, private router:Router,private service:AsesorConsultorServieService) { }
  id:number;
  redesSociale:String[];
  ngOnInit() {
     this.id=this.rutaActiva.snapshot.params.id;
     this.service.getAsesorOConsultor(this.id).subscribe(data=>{
       this.consultor=data;
       this.separaRedes(this.consultor.usuario.redesSociales);
     })
  }

  private separaRedes(redes:String){
    this.redesSociale=redes.split(";")
  }

}
