import { Component, OnInit, Input } from '@angular/core';
import { AsesorConultor } from 'src/app/Modelos/AsesorConsultor'
import { AsesorConsultorServieService } from 'src/app/Service/asesor-consultor-servie.service';
import { Router } from '@angular/router'
import { element } from 'protractor';
import { ServiceService } from 'src/app/Service/userService';
import { Usuario } from 'src/app/Modelos/Usuario';
@Component({
  selector: 'app-listar-asesor',
  templateUrl: './listar-asesor.component.html',
  styleUrls: ['./listar-asesor.component.css']
})
export class ListarAsesorComponent implements OnInit {

  @Input() private tipo:String;
  private asesor:AsesorConultor[];

  constructor(private service:AsesorConsultorServieService,private router:Router,private userService:ServiceService) { 
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

  public infoAsesorAdmin(id){
    this.router.navigate(['verAsesorAdmin',id]);
  }

  public infoAsesor(id){
    this.router.navigate(['verAsesor',id]); 
  }

  public actualizarAsesor(id){
    this.router.navigate(['editarAsesor',id]);
  }

  public BotonMostrar(){
    if(this.tipo="1"){
      return true;
    }
    return false;
  }
  
  public buscar(nombre,apellido,direccion,areas,horas){
    this.asesor.length=0;
    if(nombre.value!="" && nombre.value!=null){
      this.buscarNombre(nombre.value);
    }
    if(apellido.value!="" && apellido.value!=null){
      this.buscarApellido(apellido.value);
    }
    if(direccion.value!="" && direccion.value!=null){
      this.buscarDireccion(direccion.value);
    }
    if(areas.value!="" && areas.value!=null){
      this.buscarPorArea(areas.value);
    }
    if(horas.value!="" && horas.value!=null){
      this.buscarPorHora(horas.value);
    }
  }

  public buscarDireccion(direccion){
    alert("como buscar el nombre");
    let usuario;
    this.userService.getUsuarioDireccion(direccion).subscribe(data=>{
      usuario=data;
        usuario.array.forEach(element => {
          if(!this.asesor.includes(element)){
            this.asesor.push(element);
          }
        });
      
      console.log(this.asesor);
    })
  }
  public buscarApellido(apellido){
    alert("como hacerlo?? "+apellido);
    let usuario;
    this.userService.getUsuarioApellido(apellido).subscribe(data=>{
      usuario=data;
        usuario.array.forEach(element => {
          if(!this.asesor.includes(element)){
            this.asesor.push(element);
          }
        });
      
      console.log(this.asesor);
    })
  }
  public buscarNombre(nombre){
    alert("como hacer la busqueda por nombre de "+nombre);
    let usuario;
    this.userService.getUsuarioNombre(nombre).subscribe(data=>{
      usuario=data;
        usuario.array.forEach(element => {
          if(!this.asesor.includes(element)){
            this.asesor.push(element);
          }
        });
      
      console.log(this.asesor);
    })
  }

  private horaMayor:number=0;

  public cambiHoraMayor(horaMayor,horaMenor){
    console.log(horaMayor.checked);
    if(horaMayor.checked){
      horaMenor.disabled=true;
      this.horaMayor=1;
    }else{
      horaMenor.disabled=false;
      this.horaMayor=0;
    }
    console.log(this.horaMayor);
  }

  public cambiarHoraMenor(horaMenor,horaMayor){
    if(horaMenor.checked){
      horaMayor.disabled=true;
      this.horaMayor=2;
    }else{
      horaMayor.disabled=false;
      this.horaMayor=0;
    }
    console.log(this.horaMayor);
  }

  public buscarPorArea(areas){
    let usuasrio;
    this.service.getAsesoresPorAreas(areas).subscribe(data=>{
      usuasrio=data;
      console.log(usuasrio);
        usuasrio.forEach(element => {
          if(!this.asesor.includes(element)){
            this.asesor.push(element);
          }
      });
    });
  } 

  public buscarPorHora(hora){
    let usuasrio;
    if(this.horaMayor==1){
      this.service.getAsesorHoraMayor(hora).subscribe(data=>{
        usuasrio=data;
          usuasrio.forEach(element => {
            console.log(element.id);
            if(!this.asesor.includes(element.id)){
              this.asesor.push(element);          
            }
          });
      });
    }else if(this.horaMayor==2){
      this.service.getAsesorHoraMenor(hora).subscribe(data=>{
        usuasrio=data;
          usuasrio.forEach(element => {
            if(!this.asesor.includes(element)){
              this.asesor.push(element);          
            }
          });
      })
    }else{
      this.service.getAsesorHora(hora).subscribe(data=>{
        usuasrio=data;
          usuasrio.forEach(element => {
            console.log(element.id);
            if(!this.asesor.includes(element.id)){
              this.asesor.push(element);          
            }
          });
      })
    }
  }
  
  

  public mostrar(){
    console.log(this.asesor);
  }
}
