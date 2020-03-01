import { Component, OnInit } from '@angular/core';
import { EmpresaServiceService } from 'src/app/Service/empresa-service.service';
import { PersonaNaturalEmpresa } from 'src/app/Modelos/PersonaNaturalEmpresa';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-remover-empresa',
  templateUrl: './remover-empresa.component.html',
  styleUrls: ['./remover-empresa.component.css']
})
export class RemoverEmpresaComponent implements OnInit {

  constructor(private rutaActiva:ActivatedRoute, private service:EmpresaServiceService,private router:Router) { }
  private empresa:PersonaNaturalEmpresa;
  private id:number;
  private redes:String[];


  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params.id;
    this.service.getInfoPersnaEmpresa(this.id).subscribe(data=>{
      this.empresa=data;
      if(this.empresa.redesSociales!='' && this.empresa.redesSociales!=null){
        this.separaRedes(this.empresa.redesSociales);
      }
    });
  }

  private separaRedes(redes:String){
    this.redes=redes.split(";")
  }

  public eliminar(){
    this.service.removerPersoanEmpresa(this.id).subscribe(data=>{
      this.empresa=data;
      this.router.navigate(['listaEmpresa']);
    });
  }
}
