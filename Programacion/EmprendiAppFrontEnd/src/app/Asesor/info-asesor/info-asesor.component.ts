import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsesorConultor } from 'src/app/Modelos/AsesorConsultor';
import { AsesorConsultorServieService } from 'src/app/Service/asesor-consultor-servie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-asesor',
  templateUrl: './info-asesor.component.html',
  styleUrls: ['./info-asesor.component.css']
})
export class InfoAsesorComponent implements OnInit {

  constructor(private rutaActiva:ActivatedRoute, private router:Router,private service:AsesorConsultorServieService) { }
  private asesor= new AsesorConultor();
  id:number;
  redesSociale:String[];
  ngOnInit() {
     this.id=this.rutaActiva.snapshot.params.id;
     this.service.getAsesorOConsultor(this.id).subscribe(data=>{
       this.asesor=data;
       this.separaRedes(this.asesor.usuario.redesSociales);
     })
  }

  public mostrar(){
    console.log(this.asesor);
  }

  private separaRedes(redes:String){
    this.redesSociale=redes.split(";")
  }

}
