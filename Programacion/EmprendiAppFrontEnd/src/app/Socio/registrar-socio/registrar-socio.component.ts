import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelos/Usuario';
import { SocioInversor } from 'src/app/Modelos/SocioInversor';
import { SocioInversorServiceService } from 'src/app/Service/socio-inversor-service.service';
import { Perfil } from 'src/app/Modelos/Perfil';
import { AsesorConsultorServieService } from 'src/app/Service/asesor-consultor-servie.service';

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

  public registrarSocio(nombre,apellido,telefono,correo,direccion,areaExperticia
    ,areaInteres,descripcionInteres,horaTrabajo,conocimientoQAporta,redesSociales){
      let socio= new SocioInversor();
      let usuario = new Usuario();
      let perfil = new Perfil();

      perfil.id=5;

      usuario.nombres=nombre.value;
      console.log(usuario.nombres);
      usuario.apellidos=apellido.value;
      usuario.direccionContacto=direccion.value;
      usuario.email=correo.value;
      usuario.telefono=telefono.value;
      usuario.descripcionIntereses=descripcionInteres.value;

      let redesSocialess=redesSociales.childNodes;
      let redes="";

      let i:number;
      i=1;
      redes=redesSocialess[0];
      if(redesSocialess.length>1){
        while(redesSocialess.length>i){
          redes=";"+redesSocialess[i].value;
          i++;
        }
      }
      

      usuario.redesSociales=redes;
      usuario.perfil=perfil;

      socio.areasExperticia=areaExperticia.value;
      socio.areasInteres=areaInteres.value;
      socio.cantidadHorasDispuestoTrabajar=horaTrabajo.value;
      socio.conociminetoQAporta=conocimientoQAporta.value;
      socio.tipoSocioInversor=false;
      socio.usuario=usuario
      let sociores=null;
      this.service.registrarSocio(socio).subscribe(data=>{
        socio=data;
        if(sociores!=null){
          alert("se ha ingresado correctamente");
        }else{
          alert("no se pueo ingresar el socio vuelva a intentarlo");
        }
        this.router.navigate(['listaSocio']);
      })
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
