import { Component, OnInit } from '@angular/core';
import { ServiceService } from "src/app/Service/userService";
import { Router } from '@angular/router';
import { AsesorConultor } from 'src/app/Modelos/AsesorConsultor';

@Component({
  selector: 'app-info-asesor',
  templateUrl: './info-asesor.component.html',
  styleUrls: ['./info-asesor.component.css']
})
export class InfoAsesorComponent implements OnInit {

  asesor:AsesorConultor;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getAsesorConsultor().subscribe(data=>{
      this.asesor = data;
    });
  }

}
