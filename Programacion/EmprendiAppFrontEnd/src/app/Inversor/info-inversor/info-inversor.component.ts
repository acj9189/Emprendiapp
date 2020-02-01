import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocioInversor } from 'src/app/Modelos/SocioInversor';

@Component({
  selector: 'app-info-inversor',
  templateUrl: './info-inversor.component.html',
  styleUrls: ['./info-inversor.component.css']
})
export class InfoInversorComponent implements OnInit {

  inversor:SocioInversor;
  constructor(private router:Router) { }

  ngOnInit() {

  }

}
