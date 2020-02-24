import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-asesor',
  templateUrl: './ver-asesor.component.html',
  styleUrls: ['./ver-asesor.component.css']
})
export class VerAsesorComponent implements OnInit {

  id:number;
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params.id;
  }

}
