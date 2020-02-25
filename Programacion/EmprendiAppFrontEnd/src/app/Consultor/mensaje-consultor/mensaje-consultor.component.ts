import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/Modelos/Mensaje';
import { MensajeServiceService } from 'src/app/Service/mensaje-service.service';

@Component({
  selector: 'app-mensaje-consultor',
  templateUrl: './mensaje-consultor.component.html',
  styleUrls: ['./mensaje-consultor.component.css']
})
export class MensajeConsultorComponent implements OnInit {

  mensaje= new Mensaje();
  constructor(private service:MensajeServiceService) { }

  ngOnInit() {
  }

}
