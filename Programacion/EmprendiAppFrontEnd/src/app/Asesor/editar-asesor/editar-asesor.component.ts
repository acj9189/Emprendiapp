import { Component, OnInit } from '@angular/core';
import { AsesorConultor } from 'src/app/Modelos/AsesorConsultor';
import { AsesorConsultorServieService } from 'src/app/Service/asesor-consultor-servie.service';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-asesor',
  templateUrl: './editar-asesor.component.html',
  styleUrls: ['./editar-asesor.component.css']
})
export class EditarAsesorComponent implements OnInit {

  constructor(private rutaActiva:ActivatedRoute,private router:Router,private service:AsesorConsultorServieService) { }
  private id:number
  private asesor:AsesorConultor;
  public redesSociale:String[];
  
  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params.id;
    this.service.getAsesorOConsultor(this.id).subscribe(data=>{
      this.asesor=data;
      this.separaRedes(this.asesor.usuario.redesSociales);
    });  
  }

  private separaRedes(redes:String){
    this.redesSociale=redes.split(";")
  }

  public actualizarAsesor(){
    let i = document.getElementsByTagName("input").length;
    let j = 10;

    let redesSocialess=this.asesor.usuario.redesSociales;

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
      this.asesor.usuario.nombres=document.getElementsByTagName("input")[0].value;
    }
    if(document.getElementsByTagName("input")[1].value!=""){
      this.asesor.usuario.apellidos=document.getElementsByTagName("input")[1].value;
    }
    if(document.getElementsByTagName("input")[2].value!=""){
      this.asesor.usuario.telefono=document.getElementsByTagName("input")[2].value;
    }
    if(document.getElementsByTagName("input")[3].value!=""){
      this.asesor.usuario.email=document.getElementsByTagName("input")[3].value;
    }
    if(document.getElementsByTagName("input")[4].value!=""){
      this.asesor.usuario.direccionContacto=document.getElementsByTagName("input")[4].value;
    }
    if(document.getElementsByTagName("input")[5].value!=""){
      this.asesor.areasExperticia=document.getElementsByTagName("input")[5].value;
    }
    if(document.getElementsByTagName("input")[6].value!=""){
      this.asesor.areasInteres=document.getElementsByTagName("input")[6].value;
    }
    if(document.getElementsByTagName("input")[7].value!=""){
      this.asesor.usuario.descripcionIntereses=document.getElementsByTagName("input")[6].value;

    }
    if(document.getElementsByTagName("input")[8].value!=""){
      this.asesor.costoHora=document.getElementsByTagName("input")[8].value;
    }
    
    if(document.getElementsByTagName("input")[9].value!=""){
      this.asesor.conociminetoQAporta=document.getElementsByTagName("input")[9].value;
    }
    this.asesor.tipoAsesorConsultor=false;
    if(redesSocialess!=""){
      this.asesor.usuario.redesSociales=redesSocialess;
    }

    alert("revisar envio faslta revisar asesor");
    this.service.actualizarAsesorConsultor(this.id,this.asesor).subscribe(data=>{
      this.asesor=data;
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
