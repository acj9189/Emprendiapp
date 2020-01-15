import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Modelos/Usuario';
import { AsesorConultor } from '../Modelos/AsesorConsultor';
import { PersonaNaturalEmpresa } from '../Modelos/PersonaNaturalEmpresa';
import { SocioInversor } from '../Modelos/SocioInversor';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  usuario: Usuario;
  constructor(private http: HttpClient) { }
  
  private Url = 'http://localhost:8690/usuarios';

  public getUsuarios() {
    return this.http.get<Usuario[]>(this.Url + '/all');
  }
  
/*
  public getAsesorConsultor(){
    return this.http.get<AsesorConultor>(this.Url + '/allUsers');
  }

  public getEmpresa(){
    return this.http.get<PersonaNaturalEmpresa>(this.Url + '/allUsers');
  }

  public getSocioInversor(){
    return this.http.get<SocioInversor>(this.Url + '/allUsers');
  }*/
}