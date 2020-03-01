import { Component, OnInit } from '@angular/core';
import { PersonaNaturalEmpresa } from 'src/app/Modelos/PersonaNaturalEmpresa';
import { EmpresaServiceService } from 'src/app/Service/empresa-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent implements OnInit {
 
  constructor(private service:EmpresaServiceService,private router:Router,private rutaActiva:ActivatedRoute) { }
  private id:number;
  private empresa= new PersonaNaturalEmpresa();
  private redes:String[];

  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params.id;
    this.service.getInfoPersnaEmpresa(this.id).subscribe(data=>{
      this.empresa=data;
      if(this.empresa.redesSociales!='' && this.empresa.redesSociales!=null){
        console.log(this.empresa.redesSociales);
        this.separaRedes(this.empresa.redesSociales);
      }
    });
  }

  public retorno(){
    this.router.navigate(['listaEmpresa']);
  }

  private separaRedes(redes:String){
    this.redes=redes.split(";")
  }

  public actualizar(empresaNombre,empresaDireccion,empresaTelefonoContacto,empresaVideoPitch,empresaRedesSociales){
    
    if(empresaNombre.value!="" && empresaNombre.value!=null){
      this.empresa.nombre=empresaNombre.value;
    }
    if(empresaDireccion.value!="" && empresaDireccion.value!=null){
      this.empresa.direccion=empresaDireccion.value;
    }
    if(empresaTelefonoContacto.value!="" && empresaTelefonoContacto.value!=null){
      this.empresa.telefonoContacto=empresaTelefonoContacto.value;
    }
    if(empresaVideoPitch.value!="" && empresaVideoPitch.value!=null){
      this.empresa.videoPitch=empresaVideoPitch.value;
    } 
      
    let i = empresaRedesSociales.childNodes;
    if(i.length>1 || (i[0].value!=null && i[0].value!="")){
      let j = 0;
      let redes:String="";
      while (i.length>j){
        redes=redes+";"+i[j].value;
        j++;
      }
      this.empresa.redesSociales=redes;
    }

    console.log(this.empresa);
    alert("revisar envio faslta revisar socio");
    this.service.updatePersonaEmpresa(this.id,this.empresa).subscribe(data=>{
      this.empresa=data;
      this.retorno();
    });
  }

  public LineaMas(){
    var node=document.createElement("input");
    node.setAttribute('type','text');
    node.setAttribute('class','col-12');
    document.getElementById("redesSociales").appendChild(node);
  }
}
