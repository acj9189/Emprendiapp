import { Component, OnInit, Input } from '@angular/core';
import { MensajeServiceService } from 'src/app/Service/mensaje-service.service';
import { Mensaje } from 'src/app/Modelos/Mensaje';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelos/Usuario';
import { ServiceService } from 'src/app/Service/userService';

@Component({
  selector: 'app-enviar-mensaje',
  templateUrl: './enviar-mensaje.component.html',
  styleUrls: ['./enviar-mensaje.component.css']
})
export class EnviarMensajeComponent implements OnInit {

  constructor(private service:MensajeServiceService,private router:Router,private userService:ServiceService) { }
  @Input() id:number;
  private usuario= new Usuario();
  ngOnInit() {
    console.log(this.id);
    this.userService.getUsusario(this.id).subscribe(data=>{
      this.usuario=data;
      console.log(this.usuario);
    })
  }

  public enviar(correo,asunto,mensaje){
    let mensajer= new Mensaje();

    let date=new Date();
    mensajer.fechaRealizadoMensaje=date;
    mensajer.correoDestino=correo.value;
    mensajer.asunto=asunto.value;
    mensajer.contenido=mensaje.value;
    mensajer.nombreOrigen=this.usuario.nombres;
    mensajer.id_emisor=this.usuario.id;
    let useraux;
    console.log(this.id);
    console.log(mensajer);
    
    this.userService.enviarMensaje(this.id,mensajer).subscribe(data=>{
      useraux=data;
    })
  }

}
