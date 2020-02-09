import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-socio',
  templateUrl: './ver-socio.component.html',
  styleUrls: ['./ver-socio.component.css']
})
export class VerSocioComponent implements OnInit {
  id:number;
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params.id;
  }

}
