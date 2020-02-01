import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaServiceService } from 'src/app/Service/empresa-service.service';
import { PersonaNaturalEmpresa } from 'src/app/Modelos/PersonaNaturalEmpresa';

@Component({
  selector: 'app-listar-empresa',
  templateUrl: './listar-empresa.component.html',
  styleUrls: ['./listar-empresa.component.css']
})
export class ListarEmpresaComponent implements OnInit {

  @Input() private tipo:String;
  constructor(private service:EmpresaServiceService, private router:Router) { 
  }

  personaEmpresa:PersonaNaturalEmpresa[]
  ngOnInit() {
    this.service.getPersonaEmpresa().subscribe(data=>{
      this.personaEmpresa=data;
    });
  }

  public crear(){
    this.router.navigate(['regEmpresa']);
  }
  
  public mostrar(){
    console.log(this.personaEmpresa);
  }


  public BotonMostrar(){
    if(this.tipo="1"){
      return true;
    }
    return false;
  }
}
