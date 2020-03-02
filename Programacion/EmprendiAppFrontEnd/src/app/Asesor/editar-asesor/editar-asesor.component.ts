import { Component, OnInit } from '@angular/core';
import { AsesorConultor } from 'src/app/Modelos/AsesorConsultor';
import { AsesorConsultorServieService } from 'src/app/Service/asesor-consultor-servie.service';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/Modelos/Usuario';
import { Perfil } from 'src/app/Modelos/Perfil';

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

  public actualizarAsesor(nombres,apellido,telefono,correo,direccion,
    experticia,interes,descripcionInteres,hora){
    
    let usuario = new Usuario();
    let perfil = new Perfil();

    usuario.nombres=nombres.value;
    usuario.apellidos=apellido.value;
    usuario.telefono=telefono.value;
    usuario.email=correo.value;
    usuario.direccionContacto=direccion.value;
    usuario.descripcionIntereses=descripcionInteres.value;
    perfil.id=5;
    usuario.perfil=perfil;

    this.asesor.areasExperticia=experticia.value;
    this.asesor.areasInteres=interes.value;
    this.asesor.costoHora=hora.value;
    this.asesor.tipoAsesorConsultor=true;
    let redesSociale= document.getElementById("redes2").childNodes;
    let redes="";
    if(redesSociale.length>0){
      redesSociale.forEach(element => {
        redes=redes+";"+element;
      });
    }
    usuario.redesSociales=redes;
    this.asesor.usuario=usuario;

    if(nombres.value=!"" && apellido.value!=""){
      console.log(this.asesor);
        this.service.actualizarAsesorConsultor(Number(this.id),this.asesor).subscribe(data=>{
        this.asesor=data;
      });
    }else{
      alert("debe llenar al menos los campos nombre y apellido");
    }
  }

  public LineaMas(/*ide*/){
    var node=document.createElement("input");
    node.setAttribute('class','col-8');
    node.setAttribute('type','text');
    document.getElementById("redes2").appendChild(node);
    //ide.appendChild(node);
  }

}
