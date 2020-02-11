import { Component, OnInit } from '@angular/core';
import { PersonaNaturalEmpresa } from 'src/app/Modelos/PersonaNaturalEmpresa';
import { EmpresaServiceService } from 'src/app/Service/empresa-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent implements OnInit {
 
  constructor(private service:EmpresaServiceService,private router:Router,private rutaActiva:ActivatedRoute) { }
  private id:number;
  private empresa:PersonaNaturalEmpresa;
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

  public retorno(){
    this.router.navigate(['lstaEmpresa']);
  }

  private separaRedes(redes:String){
    this.redes=redes.split(";")
  }

  public actualizar(){
    let i = document.getElementsByTagName("input").length;
    let j = 4;

    let redesSocialess=this.empresa.redesSociales;
    if(document.getElementsByTagName("input")[j].value!=""){
      redesSocialess=redesSocialess+";"+document.getElementsByTagName("input")[j].value;
    }
      
    while (j<i-2){
      j++;
      if(document.getElementsByTagName("input")[j].value!=""){
        redesSocialess=redesSocialess+";"+document.getElementsByTagName("input")[j].value;
      }
    }
    if(document.getElementsByTagName("input")[0].value!=""){
      this.empresa.nombre=document.getElementsByTagName("input")[0].value;
    }
    if(document.getElementsByTagName("input")[1].value!=""){
      this.empresa.direccion=document.getElementsByTagName("input")[1].value;
    }
    if(document.getElementsByTagName("input")[2].value!=""){
      this.empresa.telefonoContacto=document.getElementsByTagName("input")[2].value;
    }
    if(document.getElementsByTagName("input")[3].value!=""){
      this.empresa.videoPitch=document.getElementsByTagName("input")[3].value;
    }

    if(redesSocialess!="" ){
      this.empresa.redesSociales=redesSocialess;
    }

    alert("revisar envio faslta revisar socio");
    this.service.updatePersonaEmpresa(this.id,this.empresa).subscribe(data=>{
      this.empresa=data;
      this.retorno();
    });
    //return this.socio;
  }

  public LineaMas(){
    var node=document.createElement("input");
    //node.setAttribute('class','col-8');
    node.setAttribute('type','text');
    document.getElementById("redesSociales").appendChild(node);
    //ide.appendChild(node);
  }
}
