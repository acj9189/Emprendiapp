import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsesorConultor } from 'src/app/Modelos/AsesorConsultor';
import { AsesorConsultorServieService } from 'src/app/Service/asesor-consultor-servie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-remover-consultor',
  templateUrl: './remover-consultor.component.html',
  styleUrls: ['./remover-consultor.component.css']
})
export class RemoverConsultorComponent implements OnInit {

  
  constructor(private rutaActiva:ActivatedRoute, private router:Router,private service:AsesorConsultorServieService) { }
  Consultor:AsesorConultor;
  id:number;
  redesSociale:String[];
  ngOnInit() {
     this.id=this.rutaActiva.snapshot.params.id;
     this.service.getAsesorOConsultor(this.id).subscribe(data=>{
       this.Consultor=data;
       this.separaRedes(this.Consultor.usuario.redesSociales);
     })
  }

  private separaRedes(redes:String){
    this.redesSociale=redes.split(";")
  }

  private eliminar(){
    this.service.deleteAsesorConcultor(this.id).subscribe(data=>{
      this.Consultor=data;
    })
    this.router.navigate[('listaAsesor')];
  }

}
