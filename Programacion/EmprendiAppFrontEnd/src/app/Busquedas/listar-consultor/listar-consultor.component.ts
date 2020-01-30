import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listar-consultor',
  templateUrl: './listar-consultor.component.html',
  styleUrls: ['./listar-consultor.component.css']
})
export class ListarConsultorComponent implements OnInit {

  @Input() private tipo:String;
  constructor() { 
    console.log("este es el constructor"+this.tipo);
  }

  ngOnInit() {
    console.log("este es el Init"+this.tipo);
  }

}
