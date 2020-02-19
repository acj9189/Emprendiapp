import { Component, OnInit, Input } from '@angular/core';
import { AsesorConultor } from 'src/app/Modelos/AsesorConsultor'
import { AsesorConsultorServieService } from 'src/app/Service/asesor-consultor-servie.service';
import { Router } from '@angular/router'
import { element } from 'protractor';
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
    this.router.navigate(['verAsesorAdmin',id]);
  }

  public actualizarAsesor(id){
    this.router.navigate(['editarAsesor',id]);
  }

  public buscar(areas,horas){
    this.asesor.length=0;
    console.log(areas.value);
    if(areas.value!="" && areas.value!=null){
      this.buscarPorArea(areas.value);
    }
    if(horas.value!="" && horas.value!=null){
      this.buscarPorHora(horas.value);
    }
  }

  private horaMayor:number=0;

  public cambiHoraMayor(){
    if(this.horaMayor==0 || this.horaMayor==2){
      this.horaMayor=1;
    }else{
      this.horaMayor=0;
    }
  }

  public cambiarHoraMenor(){
    if(this.horaMayor==0 || this.horaMayor==1){
      this.horaMayor=2;
    }else{
      this.horaMayor=0;
    }
  }

  public buscarPorArea(areas){
    let usuasrio;
    this.service.getAsesoresPorAreas(areas).subscribe(data=>{
      usuasrio=data;
      console.log(usuasrio);
      if(this.asesor.length>0){
        usuasrio.forEach(element => {
          if(!this.asesor.find(element.ususario.id)){
            this.asesor.push(element);
          }
      });
      }else{
        this.asesor.push(usuasrio[0]);
      }
    });
  } 

  public buscarPorHora(hora){
    let usuasrio;
    if(this.horaMayor==1){
      this.service.getAsesorHoraMayor(hora).subscribe(data=>{
        usuasrio=data;
        if(this.asesor.length>0){
          usuasrio.forEach(element => {
            if(!this.asesor.find(element.usuasrio.id)){
              this.asesor.push(element);          
            }
          });
        }else{
          this.asesor.push(usuasrio[0]);
        }
      });
    }else if(this.horaMayor==2){
      this.service.getAsesorHoraMenor(hora).subscribe(data=>{
        usuasrio=data;
        if(this.asesor.length>0){
          usuasrio.forEach(element => {
            if(!this.asesor.find(element.usuasrio.id)){
              this.asesor.push(element);          
            }
          });
        }else{
          this.asesor.push(usuasrio[0]);
        }
      })
    }else{
      this.service.getAsesorHora(hora).subscribe(data=>{
        usuasrio=data;
        if(this.asesor.length>0){
          usuasrio.forEach(element => {
            if(!this.asesor.find(element.usuasrio.id)){
              this.asesor.push(element);          
            }
          });
        }else{
          this.asesor.push(usuasrio[0]);
        }
      })
    }
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
