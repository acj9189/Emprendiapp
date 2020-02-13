import { Component, OnInit } from '@angular/core';
import { AsesorConultor } from 'src/app/Modelos/AsesorConsultor';
import { AsesorConsultorServieService } from 'src/app/Service/asesor-consultor-servie.service';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-consultor',
  templateUrl: './editar-consultor.component.html',
  styleUrls: ['./editar-consultor.component.css']
})
export class EditarConsultorComponent implements OnInit {



  constructor(private rutaActiva:ActivatedRoute,private router:Router,private service:AsesorConsultorServieService) { }
  private id:number
  private Consultor:AsesorConultor;
  public redesSociale:String[];
  
  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params.id;
    this.service.getAsesorOConsultor(this.id).subscribe(data=>{
      this.Consultor=data;
      this.separaRedes(this.Consultor.usuario.redesSociales);
    });  
  }

  private separaRedes(redes:String){
    this.redesSociale=redes.split(";")
  }

  public actualizarAsesor(){
    let i = document.getElementsByTagName("input").length;
    let j = 10;

    let redesSocialess=this.Consultor.usuario.redesSociales;

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
      this.Consultor.usuario.nombres=document.getElementsByTagName("input")[0].value;
    }
    if(document.getElementsByTagName("input")[1].value!=""){
      this.Consultor.usuario.apellidos=document.getElementsByTagName("input")[1].value;
    }
    if(document.getElementsByTagName("input")[2].value!=""){
      this.Consultor.usuario.telefono=document.getElementsByTagName("input")[2].value;
    }
    if(document.getElementsByTagName("input")[3].value!=""){
      this.Consultor.usuario.email=document.getElementsByTagName("input")[3].value;
    }
    if(document.getElementsByTagName("input")[4].value!=""){
      this.Consultor.usuario.direccionContacto=document.getElementsByTagName("input")[4].value;
    }
    if(document.getElementsByTagName("input")[5].value!=""){
      this.Consultor.areasExperticia=document.getElementsByTagName("input")[5].value;
    }
    if(document.getElementsByTagName("input")[6].value!=""){
      this.Consultor.areasInteres=document.getElementsByTagName("input")[6].value;
    }
    if(document.getElementsByTagName("input")[7].value!=""){
      this.Consultor.usuario.descripcionIntereses=document.getElementsByTagName("input")[6].value;
    }
    if(document.getElementsByTagName("input")[8].value!=""){
      this.Consultor.costoHora=document.getElementsByTagName("input")[8].value;
    }
    
    if(document.getElementsByTagName("input")[9].value!=""){
      this.Consultor.conociminetoQAporta=document.getElementsByTagName("input")[9].value;
    }
    this.Consultor.tipoAsesorConsultor=false;
    if(redesSocialess!=""){
      this.Consultor.usuario.redesSociales=redesSocialess;
    }

    alert("revisar envio faslta revisar asesor");
    this.service.actualizarAsesorConsultor(this.id,this.Consultor).subscribe(data=>{
      this.Consultor=data;
    });
  }

  public LineaMas(/*ide*/){
    var node=document.createElement("input");
    node.setAttribute('class','col-8');
    node.setAttribute('type','text');
    document.getElementById("redes2").appendChild(node);
    //ide.appendChild(node);
  }


}
