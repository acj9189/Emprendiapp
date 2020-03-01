import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaServiceService } from 'src/app/Service/empresa-service.service';
import { PersonaNaturalEmpresa } from 'src/app/Modelos/PersonaNaturalEmpresa';

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent implements OnInit {

  idnumber:number=0;
  constructor(private service:EmpresaServiceService, private router:Router) { }

  ngOnInit() {
  } 

  public registrar(nombre,telefono,direccion,redesSociales,videoPitch){
    let personaEmpresa= new PersonaNaturalEmpresa();

    let i = redesSociales.childNodes;
    console.log(i);
    console.log(i.length);
    let j = 0;
    let redesSocialess="";
    while (i.length>j){
      redesSocialess=redesSocialess+";"+i[j].value;
      j++;

    }
    
    personaEmpresa.nombre=nombre.value;
    personaEmpresa.telefonoContacto=telefono.value;
    personaEmpresa.direccion=direccion.value;
    personaEmpresa.redesSociales=redesSocialess;
    //personaEmpresa.videoPitch=document.getElementsByTagName("input")[
      //document.getElementsByTagName("input").length
    //].value;
    this.service.crearPersonaEmpresa(personaEmpresa).subscribe(data=>{
      this.router.navigate(['listaEmpresa']);
    })
  }

  public listaEmpres(){
    this.router.navigate(['listaEmpresa']);
  }

  public LineaMas(ide){
    var node=document.createElement("input");
    node.setAttribute('class','col-8');
    node.setAttribute('type','text');
    node.setAttribute('id',''+this.idnumber);
    ide.appendChild(node);
    this.idnumber++;
  }
}
