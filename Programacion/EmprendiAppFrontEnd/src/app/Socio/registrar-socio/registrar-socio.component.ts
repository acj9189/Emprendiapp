import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelos/Usuario';
import { SocioInversor } from 'src/app/Modelos/SocioInversor';
import { SocioInversorServiceService } from 'src/app/Service/socio-inversor-service.service';
import { Perfil } from 'src/app/Modelos/Perfil';

@Component({
  selector: 'app-registrar-socio',
  templateUrl: './registrar-socio.component.html',
  styleUrls: ['./registrar-socio.component.css']
})
export class RegistrarSocioComponent implements OnInit {

  idnumber:number=0;

  constructor(private service:SocioInversorServiceService,private router:Router) { }

  ngOnInit() {
  }

  public registrarSocio(){
      let socio= new SocioInversor();
      let usuario = new Usuario();
      let perfil = new Perfil();

      let i = document.getElementsByTagName("input").length;
      let j = 9;
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
      
      socio.areasExperticia=document.getElementsByTagName("input")[5].value;
      socio.areasInteres=document.getElementsByTagName("input")[6].value;
      socio.cantidadHorasDispuestoTrabajar=document.getElementsByTagName("input")[7].value
      socio.conociminetoQAporta=document.getElementsByTagName("input")[8].value;
      
      usuario.redesSociales=redesSocialess;
      perfil.id=5;
      //perfil.nombre="no funciona"
      //perfil.descripcion="esto significa que el crear o ingresar o registrar no funciona"
      usuario.perfil=perfil;
      socio.tipoSocioInversor=false;
      socio.usuario=usuario;
      if(socio.usuario.nombres!=""){
        this.service.registrarSocio(socio).subscribe(data=>{
          socio=data;
        });
        alert("revisar envio faslta revisar socio");
        this.router.navigate(['listaSocio']);
      }  else{
        alert("alguno debe llnear al menos el campo nombre");
      }
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
