import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-listar-socio',
  templateUrl: './listar-socio.component.html',
  styleUrls: ['./listar-socio.component.css']
})
export class ListarSocioComponent implements OnInit {

  @Input() private tipo:String;
  constructor() { 
    console.log("este es el constructor"+this.tipo);
  }

  ngOnInit() {
    console.log("este es el Init"+this.tipo);
  }

}
