import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-asesor-admin',
  templateUrl: './ver-asesor-admin.component.html',
  styleUrls: ['./ver-asesor-admin.component.css']
})
export class VerAsesorAdminComponent implements OnInit {

  id:number;
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params.id;
    console.log(this.id);
  }
}
