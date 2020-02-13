import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsesorConultor } from 'src/app/Modelos/AsesorConsultor';
import { AsesorConsultorServieService } from 'src/app/Service/asesor-consultor-servie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-remover-asesor',
  templateUrl: './remover-asesor.component.html',
  styleUrls: ['./remover-asesor.component.css']
})
export class RemoverAsesorComponent implements OnInit {

  constructor(private rutaActiva:ActivatedRoute, private router:Router,private service:AsesorConsultorServieService) { }
  asesor:AsesorConultor;
  id:number;
  redesSociale:String[];
  ngOnInit() {
     this.id=this.rutaActiva.snapshot.params.id;
     this.service.getAsesorOConsultor(this.id).subscribe(data=>{
       this.asesor=data;
       this.separaRedes(this.asesor.usuario.redesSociales);
     })
  }

  private separaRedes(redes:String){
    this.redesSociale=redes.split(";")
  }

  private eliminar(){
    this.service.deleteAsesorConcultor(this.id).subscribe(data=>{
      this.asesor=data;
    })
    this.router.navigate[('listaAsesor')];
  }

}
