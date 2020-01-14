import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-inversor',
  templateUrl: './registro-inversor.component.html',
  styleUrls: ['./registro-inversor.component.css']
})
export class RegistroInversorComponent implements OnInit {

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
