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

  public registrar(){
    let personaEmpresa= new PersonaNaturalEmpresa();

    let i = document.getElementsByTagName("input").length;
    let j = 3;
    let redesSocialess="";
    redesSocialess=redesSocialess+document.getElementsByTagName("input")[j].value;
    while (j<i-2){
      j++;
      redesSocialess=redesSocialess+document.getElementsByTagName("input")[j].value;
      console.log(redesSocialess);
    }
    
    personaEmpresa.nombre=document.getElementsByTagName("input")[0].value;
    personaEmpresa.telefonoContacto=document.getElementsByTagName("input")[1].value;
    personaEmpresa.direccion=document.getElementsByTagName("input")[2].value;
    personaEmpresa.redesSociales=redesSocialess;
    //personaEmpresa.videoPitch=document.getElementsByTagName("input")[
      //document.getElementsByTagName("input").length
    //].value;
    console.log(personaEmpresa.redesSociales);
    alert("revisar envio de video Pitch");
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
