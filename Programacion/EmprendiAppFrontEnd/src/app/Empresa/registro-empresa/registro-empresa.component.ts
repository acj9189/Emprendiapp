import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent implements OnInit {

  idnumber:number=0;
  constructor() { }

  ngOnInit() {
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
