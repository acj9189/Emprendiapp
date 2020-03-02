import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-mensaje-asesor',
  templateUrl: './mensaje-asesor.component.html',
  styleUrls: ['./mensaje-asesor.component.css']
})
export class MensajeAsesorComponent implements OnInit {

  constructor(private rutaActiva:ActivatedRoute) { }
  private id:number;
  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params.id;
  }

}
