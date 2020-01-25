import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-admin-edit',
  templateUrl: './listar-admin-edit.component.html',
  styleUrls: ['./listar-admin-edit.component.css']
})
export class ListarAdminEditComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

  }

  public Buscar(nombreBusqueda){
    console.log(nombreBusqueda.value);
    this.router.navigate(['editarAdministradr/25']);
  }
}
