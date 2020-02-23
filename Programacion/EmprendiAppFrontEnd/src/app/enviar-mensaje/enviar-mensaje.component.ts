import { Component, OnInit } from '@angular/core';
import { MensajeServiceService } from 'src/app/Service/mensaje-service.service';
import { Mensaje } from 'src/app/Modelos/Mensaje';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enviar-mensaje',
  templateUrl: './enviar-mensaje.component.html',
  styleUrls: ['./enviar-mensaje.component.css']
})
export class EnviarMensajeComponent implements OnInit {

  constructor(private service:MensajeServiceService,private router:Router) { }

  ngOnInit() {
  }

  public enviar(correo,asunto,mensaje){
    let mensajer= new Mensaje();

    let date=new Date();
    mensajer.fechaRealizadoMensaje=date;
    mensajer.correoDestino=correo.value;
    mensajer.asunto=asunto.value;
    mensajer.contenido=mensaje.value;
    this.service.nuevoMensaje(mensajer).subscribe(data=>{
      mensajer=data;
    });
  }

}
