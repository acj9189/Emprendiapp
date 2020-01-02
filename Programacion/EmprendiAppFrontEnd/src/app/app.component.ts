import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmprendiApp';

  ingreso:boolean=false;
  constructor(private router:Router){}
//hola
  receiveMessage($event){
    this.ingreso=$event;
    console.log("ingreso",this.ingreso);
    if(this.ingreso){
      console.log("entraste")
      this.Listar();
    }
  }

  public Listar(){
    console.log("mundo");

    this.router.navigate(["listar"]);
  }

  public Agregar(){
    this.router.navigate(["add"]);
  }

  public edit(){
    this.router.navigate(["edit"]);
  }

  public Principal(){
    this.router.navigate(["principal"]);
  }  
}
