import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-editar-administrador',
  templateUrl: './editar-administrador.component.html',
  styleUrls: ['./editar-administrador.component.css']
})
export class EditarAdministradorComponent implements OnInit {
  parametros:{id:String}

  constructor(private rutaActiva: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.parametros={
      id:this.rutaActiva.snapshot.params.id
    }
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.parametros.id = params.id;
      }
    )
    console.log(this.parametros.id);
  }

}
