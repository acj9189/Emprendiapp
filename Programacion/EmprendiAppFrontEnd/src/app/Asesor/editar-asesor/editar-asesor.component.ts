import { Component, OnInit } from '@angular/core';
import { AsesorConultor } from 'src/app/Modelos/AsesorConsultor';

@Component({
  selector: 'app-editar-asesor',
  templateUrl: './editar-asesor.component.html',
  styleUrls: ['./editar-asesor.component.css']
})
export class EditarAsesorComponent implements OnInit {

  constructor() { }
private asesor:AsesorConultor;
public redesSociale:String[];
  ngOnInit() {
    





  }

  public actualizarAsesor(){
    this.asesor.ususario.redesSociales;
this.asesor.ususario.perfil;
this.asesor.tipoAsesorConsultor;
  }

  public LineaMas(/*ide*/){
    var node=document.createElement("input");
    node.setAttribute('class','col-8');
    node.setAttribute('type','text');
    document.getElementById("redes2").appendChild(node);
    //ide.appendChild(node);
  }

}
