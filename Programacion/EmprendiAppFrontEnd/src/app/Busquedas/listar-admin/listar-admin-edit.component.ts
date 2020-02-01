import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from "src/app/Service/userService";
import { Usuario } from 'src/app/Modelos/Usuario';

@Component({
  selector: 'app-listar-admin-edit',
  templateUrl: './listar-admin-edit.component.html',
  styleUrls: ['./listar-admin-edit.component.css']
})
export class ListarAdminEditComponent implements OnInit {

  @Input() private tipo: String;
  usuarios:Usuario[];
  constructor(private service:ServiceService, private router:Router) {
   }

  ngOnInit() {
    this.service.getUsuarios().subscribe(data=>{
      this.usuarios = data;
    });
  }

  public Buscar(nombreBusqueda){
    
    //this.router.navigate(['editarAdministradr']);
  }
}
