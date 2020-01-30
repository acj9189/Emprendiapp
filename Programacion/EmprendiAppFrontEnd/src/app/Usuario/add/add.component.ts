import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelos/Usuario';
import { ServiceService } from "src/app/Service/userService";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  usuarios:Usuario[];
  //usuarioEnvio:Usuario;

  constructor(private service:ServiceService, private router:Router) { }


  ngOnInit() {
    
  }

  public Guardar(/*usuario:Usuario*/ nombres,apellidos,email){
    //console.log(usuario.a());

    let usuarioEnvio = new Usuario();   
    usuarioEnvio.nombres= nombres.value;
    usuarioEnvio.apellidos= apellidos.value;
    usuarioEnvio.correo= email.value;
    usuarioEnvio.direccion = "";
    usuarioEnvio.interfaces = "";
    usuarioEnvio.telefono = "";

    this.service.addUsuarios(usuarioEnvio).subscribe(data=>{
      usuarioEnvio=data;
    })

    this.router.navigate(["listar"]);
    }
}
