import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-consultor-admin',
  templateUrl: './ver-consultor-admin.component.html',
  styleUrls: ['./ver-consultor-admin.component.css']
})
export class VerConsultorAdminComponent implements OnInit {

  id:number;
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params.id;
    console.log(this.id);
  }

}
