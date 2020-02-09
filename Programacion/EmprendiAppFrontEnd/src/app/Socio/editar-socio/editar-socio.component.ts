import { Component, OnInit } from '@angular/core';
import { SocioInversorServiceService } from "src/app/Service/socio-inversor-service.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SocioInversor } from 'src/app/Modelos/SocioInversor';

@Component({
  selector: 'app-editar-socio',
  templateUrl: './editar-socio.component.html',
  styleUrls: ['./editar-socio.component.css']
})
export class EditarSocioComponent implements OnInit {

 
  constructor(private service:SocioInversorServiceService, private router:Router,private rutaActiva: ActivatedRoute) { }
  private id:number;
  private socio:SocioInversor;
  private redes:String[];


  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params.id;
    this.service.infoSocio(this.id).subscribe(data=>{
      this.socio=data;
      this.separaRedes(this.socio.usuario.redesSociales);
    });
  }

  private separaRedes(redes:String){
    this.redes=redes.split(";")
  }

  public retorno(){
    this.router.navigate(['listaSocio']);
  }

  public actualizar(){
    let i = document.getElementsByTagName("input").length;
    let j = 9;
    let redesSocialess=this.socio.usuario.redesSociales;
    if(document.getElementsByTagName("input")[j].value!=""){
      redesSocialess=redesSocialess+document.getElementsByTagName("input")[j].value;
    }
      
    while (j<i-2){
      j++;
      if(document.getElementsByTagName("input")[j].value!=""){
      redesSocialess=redesSocialess+document.getElementsByTagName("input")[j].value;
      }
    }
    if(document.getElementsByTagName("input")[0].value!=""){
      this.socio.usuario.nombres=document.getElementsByTagName("input")[0].value;
    }
    if(document.getElementsByTagName("input")[1].value!=""){
      this.socio.usuario.apellidos=document.getElementsByTagName("input")[1].value;
    }
    if(document.getElementsByTagName("input")[2].value!=""){
      this.socio.usuario.telefono=document.getElementsByTagName("input")[2].value;
    }
    if(document.getElementsByTagName("input")[3].value!=""){
      this.socio.usuario.email=document.getElementsByTagName("input")[3].value;
    }
    if(document.getElementsByTagName("input")[4].value!=""){
      this.socio.usuario.direccionContacto=document.getElementsByTagName("input")[4].value;
    }
    if(document.getElementsByTagName("input")[5].value!=""){
      this.socio.areasExperticia=document.getElementsByTagName("input")[5].value;
    }
    if(document.getElementsByTagName("input")[6].value!=""){
      this.socio.usuario.descripcionIntereses=document.getElementsByTagName("input")[6].value;
      this.socio.areasInteres=document.getElementsByTagName("input")[6].value;
    }
    if(document.getElementsByTagName("input")[7].value!=""){
      this.socio.cantidadHorasDispuestoTrabajar=document.getElementsByTagName("input")[7].value
    }
    if(document.getElementsByTagName("input")[8].value!=""){
      this.socio.conociminetoQAporta=document.getElementsByTagName("input")[8].value;
    }
    this.socio.tipoSocioInversor=false;
    if(redesSocialess!=""){
      this.socio.usuario.redesSociales=redesSocialess;
    }

    alert("revisar envio faslta revisar socio");
    this.service.updateSocio(this.id,this.socio).subscribe(data=>{
      this.socio=data;
    });
    //return this.socio;
  }

  public LineaMas(/*ide*/){
    var node=document.createElement("input");
    node.setAttribute('class','col-8');
    node.setAttribute('type','text');
    document.getElementById("redes2").appendChild(node);
    //ide.appendChild(node);
  }
}
