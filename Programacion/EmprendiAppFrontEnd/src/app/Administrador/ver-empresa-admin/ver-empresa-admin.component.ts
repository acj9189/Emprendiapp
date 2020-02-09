import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-empresa-admin',
  templateUrl: './ver-empresa-admin.component.html',
  styleUrls: ['./ver-empresa-admin.component.css']
})
export class VerEmpresaAdminComponent implements OnInit {

  id:number;
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params.id;
  }
 
}
