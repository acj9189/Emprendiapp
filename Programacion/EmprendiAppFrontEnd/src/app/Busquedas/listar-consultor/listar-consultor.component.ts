import { Component, OnInit, Input } from '@angular/core';
import { AsesorConultor } from 'src/app/Modelos/AsesorConsultor'
import { AsesorConsultorServieService } from 'src/app/Service/asesor-consultor-servie.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-listar-consultor',
  templateUrl: './listar-consultor.component.html',
  styleUrls: ['./listar-consultor.component.css']
})
export class ListarConsultorComponent implements OnInit {

  @Input() private tipo:String;
  private consultor:AsesorConultor[];

  constructor(private service:AsesorConsultorServieService,private router:Router) { 
  }

  ngOnInit() {
    this.service.getConsultores().subscribe(data=>{
      this.consultor=data;
    }); 
  }

  public registrarConsultor(){
    this.router.navigate(['registroConsultor']);
  }
  
  public removerConsultor(id){
    //console.log(id);
    this.router.navigate(['removerConsultor',id]);
  }

  public infoConsultor(id){
    //console.log(id);
    this.router.navigate(['veConsultorAdmin',id]);
  }

  public actualizarConsultor(id){
    this.router.navigate(['editarConsultor',id]);
  }
  
  public BotonMostrar(){
    if(this.tipo="1"){
      return true;
    }
    return false;
  }

  
  public buscar(areas,horas){
    this.consultor.length=0;
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
      if(this.consultor.length>0){
        usuasrio.forEach(element => {
          if(!this.consultor.find(element.ususario.id)){
            this.consultor.push(element);
          }
      });
      }else{
        this.consultor.push(usuasrio[0]);
      }
    });
  } 

  public buscarPorHora(hora){
    let usuasrio;
    if(this.horaMayor==1){
      this.service.getAsesorHoraMayor(hora).subscribe(data=>{
        usuasrio=data;
        if(this.consultor.length>0){
          usuasrio.forEach(element => {
            if(!this.consultor.find(element.usuasrio.id)){
              this.consultor.push(element);          
            }
          });
        }else{
          this.consultor.push(usuasrio[0]);
        }
      });
    }else if(this.horaMayor==2){
      this.service.getAsesorHoraMenor(hora).subscribe(data=>{
        usuasrio=data;
        if(this.consultor.length>0){
          usuasrio.forEach(element => {
            if(!this.consultor.find(element.usuasrio.id)){
              this.consultor.push(element);          
            }
          });
        }else{
          this.consultor.push(usuasrio[0]);
        }
      })
    }else{
      this.service.getAsesorHora(hora).subscribe(data=>{
        usuasrio=data;
        if(this.consultor.length>0){
          usuasrio.forEach(element => {
            if(!this.consultor.find(element.usuasrio.id)){
              this.consultor.push(element);          
            }
          });
        }else{
          this.consultor.push(usuasrio[0]);
        }
      })
    }
  }

  public mostrar(){
    console.log(this.consultor);
  }

}

