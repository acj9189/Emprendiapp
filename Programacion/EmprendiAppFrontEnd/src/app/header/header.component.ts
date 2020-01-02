import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ingreso;

  @Output() messageEvent = new EventEmitter<boolean>();

  constructor() { 
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
  } 
}
