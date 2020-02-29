import { Component, OnInit } from '@angular/core';
import { ServiceService } from "src/app/Service/userService";
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelos/Usuario';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarios:Usuario[];
  constructor(private service:ServiceService, private router:Router) { }
  redesSociales:String[];
  ngOnInit() {
    this.service.getUsuarios().subscribe(data=>{
      this.usuarios = data;
    });
  }

  public eliminar(id){
    let user:Usuario;
    this.service.deleteUsuario(id).subscribe(data=>{
      user=data;
    })
  }

  public ver(id){
    let usuario;
    this.service.getUsusario(Number(id)).subscribe(data=>{
      usuario=data;
      console.log(usuario);
    })
  }


}
