import { Component, OnInit } from '@angular/core';
import { ServiceService } from "src/app/Service/userService";
import { Router } from '@angular/router';
import { Empresa } from 'src/app/Modelos/Empresa';

@Component({
  selector: 'app-info-empresa',
  templateUrl: './info-empresa.component.html',
  styleUrls: ['./info-empresa.component.css']
})
export class InfoEmpresaComponent implements OnInit {

  empresa:Empresa;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getEmpresa().subscribe(data=>{
      this.empresa = data;
    });
  }

}
