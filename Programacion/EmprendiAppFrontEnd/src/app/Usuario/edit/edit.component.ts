import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/userService'
import { Usuario } from 'src/app/Modelos/Usuario';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private service:ServiceService) { }

  private usuario:Usuario;
  private id=8;
  ngOnInit() {
    this.service.getUsusario(this.id).subscribe(data=>{
      this.usuario=data;
      console.log(this.usuario);
      this.llenar(this.usuario.nombres,this.usuario.apellidos);
    })
  }

  public llenar(nombre,apellido){
    nombre.value=this.usuario.nombres;
    apellido.value=this.usuario.apellidos;
  }

  public actualizar(nombre,apellido){
    this.usuario.nombres=nombre.value;
    this.usuario.apellidos=apellido.value;
    let user:Usuario;
    this.service.updateUsuario(this.id,this.usuario).subscribe(data=>{
      user=data;
      console.log(user);
    })
  }
}
