import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-inversor',
  templateUrl: './ver-inversor.component.html',
  styleUrls: ['./ver-inversor.component.css']
})
export class VerInversorComponent implements OnInit {

  id:number;
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params.id;
  }

}
