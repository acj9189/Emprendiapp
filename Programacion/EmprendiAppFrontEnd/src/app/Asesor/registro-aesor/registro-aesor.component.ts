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

  public registrar(){
    alert("en puebas");
    let asesor= new AsesorConultor();
    let usuario = new Usuario();
    let perfil = new Perfil();

    let i = document.getElementsByTagName("input").length;
    let j = 10;
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
      asesor.areasExperticia=document.getElementsByTagName("input")[5].value;
      asesor.costoHora=document.getElementsByTagName("input")[6].value

      asesor.areasInteres=document.getElementsByTagName("input")[7].value;
      usuario.descripcionIntereses=document.getElementsByTagName("input")[8].value;

      asesor.conociminetoQAporta=document.getElementsByTagName("input")[9].value;
      
      usuario.redesSociales=redesSocialess;
      perfil.id=3;
      //perfil.nombre="no funciona"
      //perfil.descripcion="esto significa que el crear o ingresar o registrar no funciona"
      usuario.perfil=perfil;
      asesor.tipoAsesorConsultor=true;
      asesor.usuario=usuario;
      if(asesor.usuario.nombres!="" && asesor.usuario.apellidos!=""){
        this.service.nuevoAsesorConsultor(asesor).subscribe(data=>{
          asesor=data;
        });
        this.router.navigate(['listaSocio']);
      }  else{
        alert(" debe llnear al menos el campo nombre y apellidos");
      }
  }

  public LineaMas(ide){
    var node=document.createElement("input");
    node.setAttribute('class','col-12');
    node.setAttribute('type','text');
    ide.appendChild(node);
    this.idnumber++;
  }
}
