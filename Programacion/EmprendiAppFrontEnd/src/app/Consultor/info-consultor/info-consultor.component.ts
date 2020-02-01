import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsesorConultor } from 'src/app/Modelos/AsesorConsultor';

@Component({
  selector: 'app-info-consultor',
  templateUrl: './info-consultor.component.html',
  styleUrls: ['./info-consultor.component.css']
})
export class InfoConsultorComponent implements OnInit {

  Consultor:AsesorConultor;
  constructor(private router:Router) { }

  ngOnInit() {

  }

}
