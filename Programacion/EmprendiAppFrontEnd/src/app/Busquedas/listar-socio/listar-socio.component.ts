import { Component, OnInit,Input } from '@angular/core';
import { SocioInversorServiceService } from "src/app/Service/socio-inversor-service.service";
import { Router } from '@angular/router';
import { SocioInversor } from 'src/app/Modelos/SocioInversor';

@Component({
  selector: 'app-listar-socio',
  templateUrl: './listar-socio.component.html',
  styleUrls: ['./listar-socio.component.css']
})
export class ListarSocioComponent implements OnInit {

  @Input() private tipo:String;
  socio:SocioInversor[];
  constructor(private service:SocioInversorServiceService, private router:Router) { 
  }

  ngOnInit() {
    this.service.getSocios().subscribe(data=>{
      this.socio=data;
    });    
  }

  public registrarSocio(){
    this.router.navigate(['registrarSocio']);
  }
  
  public removerSocio(id){
    //console.log(id);
    this.router.navigate(['removerSocio',id]);
  }

  public infoSocioAdmin(id){
    //console.log(id);
    this.router.navigate(['verSocioAdmin',id]);
  }

  public infoSocio(id){
    //console.log(id);
    this.router.navigate(['verSocio',id]);
  }

  public actualizarSocio(id){
    this.router.navigate(['editarSocio',id]);
  }
  
  public BotonMostrar(){
    if(this.tipo="1"){
      return true;
    }
    return false;
  }
}
