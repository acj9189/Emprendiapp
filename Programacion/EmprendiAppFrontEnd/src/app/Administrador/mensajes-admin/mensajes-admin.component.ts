import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/Modelos/Mensaje';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-mensajes-admin',
  templateUrl: './mensajes-admin.component.html',
  styleUrls: ['./mensajes-admin.component.css']
})
export class MensajesAdminComponent implements OnInit {

  constructor(private rutaActiva:ActivatedRoute) { }

  private mensajes: any[];
  ngOnInit() {
    this.mensajes=this.rutaActiva.snapshot.params.mensajes;
    console.log(this.mensajes);
  }

}
