import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-socio-admin',
  templateUrl: './ver-socio-admin.component.html',
  styleUrls: ['./ver-socio-admin.component.css']
})
export class VerSocioAdminComponent implements OnInit {
  id:number;
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params.id;
    console.log(this.id);
  }

}
