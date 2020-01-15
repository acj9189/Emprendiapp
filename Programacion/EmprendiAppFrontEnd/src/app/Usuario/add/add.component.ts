import { Component, OnInit } from '@angular/core';
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
  constructor(private service:ServiceService, private router:Router) { }


  ngOnInit() {
    
  }

  public Guardar(usuario:Usuario){
    
    this.service.addUsuarios(usuario).subscribe(data=>{
      alert("Se agrego con exito...");
      this.router.navigate(["listar"]);
      
    })
  }

  

}
