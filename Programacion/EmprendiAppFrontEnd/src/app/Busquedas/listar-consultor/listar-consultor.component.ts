import { Component, OnInit, Input } from '@angular/core';
import { AsesorConultor } from 'src/app/Modelos/AsesorConsultor'
import { AsesorConsultorServieService } from 'src/app/Service/asesor-consultor-servie.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-listar-asesor',
  templateUrl: './listar-asesor.component.html',
  styleUrls: ['./listar-asesor.component.css']
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

}

