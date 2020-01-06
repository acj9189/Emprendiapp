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
  constructor(private router:Router){
  }
//hola
  receiveMessage($event){
    this.ingreso=$event;
    if(this.ingreso){
      this.infoEmpresa();
    }else{
      this.inicio();
    }
  }

  public infoEmpresa(){
    this.router.navigate(['infoEmpresa']);
  }

  public inicio(){
    this.router.navigate(['']);
  }

  public Listar(){
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

  public buscarFiltro(){
    this.router.navigate(['buscarFiltro']);
  }

  public enviarMensaje(){
    this.router.navigate(['enviarMensaje']);
  }
}
