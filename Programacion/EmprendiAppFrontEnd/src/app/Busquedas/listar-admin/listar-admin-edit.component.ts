import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-admin-edit',
  templateUrl: './listar-admin-edit.component.html',
  styleUrls: ['./listar-admin-edit.component.css']
})
export class ListarAdminEditComponent implements OnInit {

  @Input() private tipo: String;
  constructor(private router:Router) {
   }

  ngOnInit() {
    
  }

  public Buscar(nombreBusqueda){
    console.log("revisando")
    console.log(nombreBusqueda.value);
    console.log(this.tipo);

    //this.router.navigate(['editarAdministradr']);
  }
}
