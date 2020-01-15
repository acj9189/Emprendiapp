import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public Listar(){
    this.router.navigate(["listar"]);
  }

  public edit(){
    this.router.navigate(["edit"]);
  }

  public add(){
    this.router.navigate(["add"]);
  }
}
