import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listar-inversor',
  templateUrl: './listar-inversor.component.html',
  styleUrls: ['./listar-inversor.component.css']
})
export class ListarInversorComponent implements OnInit {

  @Input() private tipo:String;
  constructor() { 
    console.log("este es el constructor"+this.tipo);
  }

  ngOnInit() {
    console.log("este es el Init"+this.tipo);
  }

}
