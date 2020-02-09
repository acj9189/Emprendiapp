import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelos/Usuario';
import { SocioInversor } from 'src/app/Modelos/SocioInversor';
import { SocioInversorServiceService } from 'src/app/Service/socio-inversor-service.service';
import { Perfil } from 'src/app/Modelos/Perfil';

@Component({
  selector: 'app-registro-inversor',
  templateUrl: './registro-inversor.component.html',
  styleUrls: ['./registro-inversor.component.css']
})
export class RegistroInversorComponent implements OnInit {

  idnumber:number;
  constructor(private service:SocioInversorServiceService,private router:Router) { }

  ngOnInit() {
  }

  public registrarSocio(){
    let inversor= new SocioInversor();
    let usuario = new Usuario();
    let perfil = new Perfil();

    let i = document.getElementsByTagName("input").length;
    let j = 8;
    let redesSocialess="";
    redesSocialess=redesSocialess+document.getElementsByTagName("input")[j].value;
    
    while (j<i-2){
      j++;
      redesSocialess=redesSocialess+";"+document.getElementsByTagName("input")[j].value;
    }
    
    usuario.nombres=document.getElementsByTagName("input")[0].value;
    usuario.apellidos=document.getElementsByTagName("input")[1].value;
    usuario.telefono=document.getElementsByTagName("input")[2].value;
    usuario.email=document.getElementsByTagName("input")[3].value;
    usuario.direccionContacto=document.getElementsByTagName("input")[4].value;
    usuario.descripcionIntereses=document.getElementsByTagName("input")[6].value;
    
    inversor.areasExperticia=document.getElementsByTagName("input")[5].value;
    inversor.areasInteres=document.getElementsByTagName("input")[6].value;
    inversor.conociminetoQAporta=document.getElementsByTagName("input")[8].value;
    
    usuario.redesSociales=redesSocialess;
    perfil.nombre="socio";
    perfil.descripcion="negocios para la empresa";
    usuario.perfil=perfil;
    inversor.tipoSocioInversor=false;
    inversor.usuario=usuario;
    if(inversor.usuario.nombres!=""){
      this.service.registrarSocio(inversor).subscribe(data=>{
        inversor=data;
      });
      alert("revisar envio faslta revisar socio");
      this.router.navigate(['listaSocio']);
    }  
    alert("alguno debe llnear al menos el campo nombre");
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
