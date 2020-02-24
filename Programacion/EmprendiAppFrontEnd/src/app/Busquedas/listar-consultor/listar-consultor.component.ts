import { Component, OnInit, Input } from '@angular/core';
import { AsesorConultor } from 'src/app/Modelos/AsesorConsultor'
import { AsesorConsultorServieService } from 'src/app/Service/asesor-consultor-servie.service';
import { Router } from '@angular/router'
import { ServiceService } from 'src/app/Service/userService';
@Component({
  selector: 'app-listar-consultor',
  templateUrl: './listar-consultor.component.html',
  styleUrls: ['./listar-consultor.component.css']
})
export class ListarConsultorComponent implements OnInit {

  @Input() private tipo:String;
  private consultor:AsesorConultor[];

  constructor(private service:AsesorConsultorServieService,private router:Router,private userService:ServiceService) { 
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

  public infoConsultorAdmin(id){
    //console.log(id);
    this.router.navigate(['veConsultorAdmin',id]);
  }

  public infoConsultor(id){
    this.router.navigate(['verConsultor',id]);
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

  public buscar(nombre,apellido,direccion,areas,horas){
    this.consultor.length=0;
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
      if(this.consultor.length>0){
        usuario.array.forEach(element => {
          console.log(element);
          console.log(element.id);
          if(!this.consultor.find(element.id)){
            this.consultor.push(element);
          }
        });
      }
      console.log(this.consultor);
    })
  }
  public buscarApellido(apellido){
    alert("como hacerlo?? "+apellido);
    let usuario;
    this.userService.getUsuarioApellido(apellido).subscribe(data=>{
      usuario=data;
      if(this.consultor.length>0){
        usuario.array.forEach(element => {
          console.log(element);
          console.log(element.id);
          if(!this.consultor.find(element.id)){
            this.consultor.push(element);
          }
        });
      }
      console.log(this.consultor);
    })
  }
  public buscarNombre(nombre){
    alert("como hacer la busqueda por nombre de "+nombre);
    let usuario;
    this.userService.getUsuarioNombre(nombre).subscribe(data=>{
      usuario=data;
      if(this.consultor.length>0){
        usuario.array.forEach(element => {
          console.log(element);
          console.log(element.id);
          if(!this.consultor.find(element.id)){
            this.consultor.push(element);
          }
        });
      }
      console.log(this.consultor);
    })
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

