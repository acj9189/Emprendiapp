import { Component, OnInit } from '@angular/core';
import { AsesorConultor } from 'src/app/Modelos/AsesorConsultor';
import { Usuario } from 'src/app/Modelos/Usuario';
import { Perfil } from 'src/app/Modelos/Perfil';
import { Router } from '@angular/router';
import { AsesorConsultorServieService } from 'src/app/Service/asesor-consultor-servie.service';

@Component({
  selector: 'app-registro-aesor',
  templateUrl: './registro-aesor.component.html',
  styleUrls: ['./registro-aesor.component.css']
})
export class RegistroAesorComponent implements OnInit {

  idnumber:number=0;

  constructor(private router:Router, private service:AsesorConsultorServieService) { }

  ngOnInit() {
  }

  public registrar(nombre,apellido,telefono,correo,direccioin,experticia,costoHora,
    areaInteres,descripcionInteres,conocimientoAporta,redesSociales){
    alert("en puebas");
    let asesor= new AsesorConultor();
    let usuario = new Usuario();
    let perfil = new Perfil();
    let redesSocialess=redesSociales.childNodes;
    let redes="";

    let i:number;
    i=1;
    redes=redesSocialess[0];
    while(redesSocialess.length>i){
      redes=";"+redesSocialess[i].value;
      i++;
    }

    usuario.nombres=nombre.value;
    usuario.apellidos=apellido.value;
    usuario.telefono=telefono.value;
    usuario.email=correo.value;
    usuario.direccionContacto=direccioin.value;
    perfil.id=3;
    usuario.perfil=perfil;
    usuario.descripcionIntereses=descripcionInteres.value;
    usuario.redesSociales=redes;

    asesor.areasInteres=areaInteres.value;
    asesor.areasExperticia=experticia.value;
    asesor.costoHora=costoHora.value;
    asesor.conociminetoQAporta=conocimientoAporta.value;
    asesor.usuario=usuario;

    this.service.nuevoAsesorConsultor(asesor).subscribe(data=>{
      asesor=data;
      this.router.navigate(['listarAsesor']);
    });
  }

  public LineaMas(ide){
    var node=document.createElement("input");
    node.setAttribute('class','col-12');
    node.setAttribute('type','text');
    ide.appendChild(node);
    this.idnumber++;
  }
}
