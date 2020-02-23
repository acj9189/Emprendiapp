import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-producto-admin',
  templateUrl: './ver-producto-admin.component.html',
  styleUrls: ['./ver-producto-admin.component.css']
})
export class VerProductoAdminComponent implements OnInit {

  id:number;
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params.id;
    console.log(this.id);
  }

}
