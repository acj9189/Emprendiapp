import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelos/Usuario';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/userService';
@Component({
  selector: 'app-info-administrador',
  templateUrl: './info-administrador.component.html',
  styleUrls: ['./info-administrador.component.css']
})
export class InfoAdministradorComponent implements OnInit {

  constructor(private rutaActiva:ActivatedRoute,private service:ServiceService) { }

  private Administrador = new Usuario();
  private id:number;
  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params.id;
    this.service.getUsusario(this.id).subscribe(data=>{
      this.Administrador=data;
    });
  }

}
