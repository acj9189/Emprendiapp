import { Component, OnInit } from '@angular/core';
import { EmpresaServiceService } from 'src/app/Service/empresa-service.service';
import { PersonaNaturalEmpresa } from 'src/app/Modelos/PersonaNaturalEmpresa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remover-empresa',
  templateUrl: './remover-empresa.component.html',
  styleUrls: ['./remover-empresa.component.css']
})
export class RemoverEmpresaComponent implements OnInit {

  constructor(private service:EmpresaServiceService,private router:Router) { }
  private empresa:PersonaNaturalEmpresa;
  ngOnInit() {
  }

  public eliminar(id){
    this.service.removerPersoanEmpresa(id).subscribe(data=>{
      this.empresa=data;
      this.router.navigate(['listaEmpresa']);
    });
  }
}
