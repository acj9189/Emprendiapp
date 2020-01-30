import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  @Input() private tipo:String;
  constructor() { 
    console.log("este es el constructor"+this.tipo);
  }

  ngOnInit() {
    console.log("este es el Init"+this.tipo);
  }

}
