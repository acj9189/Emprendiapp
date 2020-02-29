import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { LoginServiceService } from '../Service/login-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ingreso;

  @Output() messageEvent = new EventEmitter<boolean>();

  constructor(private service:LoginServiceService) { 
    this.ingreso=false;
  }

  sendMessage() {
    this.messageEvent.emit(this.ingreso);
  }

  ngOnInit() {
  }

  public ingresarSalir(){
    if(this.ingreso){
      this.ingreso=false;
    }else{
      this.ingreso=true;
    }
    this.sendMessage();
    return this.ingreso;
  } 

  public miCuenta(){
    alert("esta pendiente");
  }
}
