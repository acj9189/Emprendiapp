import { Component, OnInit, Input } from '@angular/core';
import { AsesorConultor } from 'src/app/Modelos/AsesorConsultor'
import { AsesorConsultorServieService } from 'src/app/Service/asesor-consultor-servie.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-listar-asesor',
  templateUrl: './listar-asesor.component.html',
  styleUrls: ['./listar-asesor.component.css']
})
export class ListarAsesorComponent implements OnInit {

  @Input() private tipo:String;
  private asesor:AsesorConultor[];

  constructor(private service:AsesorConsultorServieService,private router:Router) { 
  }

  ngOnInit() {
    this.service.getAsesores().subscribe(data=>{
      this.asesor=data;
    });  
  }

  public registrarAsesor(){
    this.router.navigate(['registroAsesor']);
  }
  
  public removerAsesor(id){
    //console.log(id);
    this.router.navigate(['removerAsesor',id]);
  }

  public infoAsesor(id){
    console.log("buscando info de "+id);
    this.router.navigate(['verAsesorAdmin',id]);
  }

  public actualizarAsesor(id){
    this.router.navigate(['editarAsesor',id]);
  }

  public buscar(){

  }
  private horaMayor:boolean;
  public cambiHoraMayor(){
    this.horaMayor=true;
  }

  public cambiarHoraMenor(){
    this.horaMayor=false;
  }

  public buscarPorArea(){

  }

  public buscarPorHora(){

  }
  
  public BotonMostrar(){
    if(this.tipo="1"){
      return true;
    }
    return false;
  }

  public mostrar(){
    console.log(this.asesor);
  }
}
