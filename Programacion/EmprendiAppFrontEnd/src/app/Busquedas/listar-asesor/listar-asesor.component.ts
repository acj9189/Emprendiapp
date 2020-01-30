import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listar-asesor',
  templateUrl: './listar-asesor.component.html',
  styleUrls: ['./listar-asesor.component.css']
})
export class ListarAsesorComponent implements OnInit {

  @Input() private tipo:String;
  constructor() { 
    console.log("este es el constructor"+this.tipo);
  }

  ngOnInit() {
    console.log("este es el Init"+this.tipo);
  }

}
