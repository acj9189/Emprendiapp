import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-aesor',
  templateUrl: './registro-aesor.component.html',
  styleUrls: ['./registro-aesor.component.css']
})
export class RegistroAesorComponent implements OnInit {

  idnumber:number=0;

  constructor() { }

  ngOnInit() {
  }

  public registrar(){
    alert("aun en realizacion");
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
