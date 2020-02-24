import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-consultor',
  templateUrl: './ver-consultor.component.html',
  styleUrls: ['./ver-consultor.component.css']
})
export class VerConsultorComponent implements OnInit {

  id:number;
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params.id;
  }

}
