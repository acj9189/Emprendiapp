import { Component, OnInit,Input } from '@angular/core';
import { SocioInversorServiceService } from "src/app/Service/socio-inversor-service.service";
import { Router } from '@angular/router';
import { SocioInversor } from 'src/app/Modelos/SocioInversor';

@Component({
  selector: 'app-listar-inversor',
  templateUrl: './listar-inversor.component.html',
  styleUrls: ['./listar-inversor.component.css']
})
export class ListarInversorComponent implements OnInit {

  @Input() private tipo:String;
  inversor:SocioInversor[];
  constructor(private service:SocioInversorServiceService, private router:Router) { 
  }

  ngOnInit() {
    this.service.getInversores().subscribe(data=>{
      this.inversor=data;
    });    
  }

  public registrarInversor(){
    this.router.navigate(['registrarInversor']);
  }
  
  public removerInversor(id){
    //console.log(id);
    this.router.navigate(['removerInversor',id]);
  }
 
  public infoInversorAdmin(id){
    //console.log(id);
    this.router.navigate(['verInversorAdmin',id]);
  }

  public infoInversor(id){
    this.router.navigate(['verInversor',id]);
  }

  public actualizarInversor(id){
    this.router.navigate(['editarInversor',id]);
  }
  
  public BotonMostrar(){
    if(this.tipo="1"){
      return true;
    }
    return false;
  }

  public buscar(areaExperticia,nombre,apellido,direccion){
    if(areaExperticia.value!="" && areaExperticia.value!=null){
      let inversorAux;
      alert("no se ha echo");
    }
    if(nombre.value!="" && nombre.value!=null){
      alert("no se ha echo");
    }
    if(apellido.value!="" && apellido.value!=null){
      alert("no se ha echo");
    }
    if(direccion.value!="" && direccion.value!=null){
      alert("no se ha echo");
    }
  }
}
