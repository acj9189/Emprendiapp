import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelos/Usuario';
import { SocioInversor } from 'src/app/Modelos/SocioInversor';
import { SocioInversorServiceService } from 'src/app/Service/socio-inversor-service.service';

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

      let i = document.getElementsByTagName("input").length;
      let j = 5;
      let redesSocialess="";
      redesSocialess=redesSocialess+document.getElementsByTagName("input")[j].value;
      
      while (j<i-2){
        j++;
        redesSocialess=redesSocialess+document.getElementsByTagName("input")[j].value;
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
      socio.tipoSocioInversor=false;
      socio.usuario=usuario;
      console.log("usuario: "+usuario);
      this.service.registrarSocio(socio).subscribe(data=>{
          socio=data;
      });

      console.log("Socio: "+socio);
      alert("revisar envio faslta revisar socio");
      //this.router.navigate(['listaSocio']);
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
