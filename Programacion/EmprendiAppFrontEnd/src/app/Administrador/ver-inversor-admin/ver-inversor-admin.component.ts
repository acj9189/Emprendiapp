import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-inversor-admin',
  templateUrl: './ver-inversor-admin.component.html',
  styleUrls: ['./ver-inversor-admin.component.css']
})
export class VerInversorAdminComponent implements OnInit {

  id:number;
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params.id;
  }

}
