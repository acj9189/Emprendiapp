import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaNaturalEmpresa } from 'src/app/Modelos/PersonaNaturalEmpresa';
import { EmpresaServiceService } from 'src/app/Service/empresa-service.service';

@Component({
  selector: 'app-info-empresa',
  templateUrl: './info-empresa.component.html',
  styleUrls: ['./info-empresa.component.css']
})
export class InfoEmpresaComponent implements OnInit {

  empresa= new PersonaNaturalEmpresa();
  constructor( private router:Router,private service:EmpresaServiceService) { }
  @Input() id:number;
  redes:String[];
  
  ngOnInit() {
    this.service.getInfoPersnaEmpresa(this.id).subscribe(data=>{
      this.empresa=data;
      this.separaRedes(this.empresa.redesSociales);
    })
  }

  private separaRedes(redes:String){
    this.redes=redes.split(";")
  }

}
