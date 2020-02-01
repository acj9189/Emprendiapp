import { Component, OnInit } from '@angular/core';
import { ServiceService } from "src/app/Service/userService";
import { Router } from '@angular/router';
import { SocioInversor } from 'src/app/Modelos/SocioInversor';

@Component({
  selector: 'app-info-socio',
  templateUrl: './info-socio.component.html',
  styleUrls: ['./info-socio.component.css']
})
export class InfoSocioComponent implements OnInit {
  socio:SocioInversor;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {

  }

}
