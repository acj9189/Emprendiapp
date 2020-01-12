import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Modelos/Usuario';
import { AsesorConultor } from '../Modelos/AsesorConsultor';
import { Empresa } from '../Modelos/Empresa';
import { SocioInversor } from '../Modelos/SocioInversor';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  usuario: Usuario;
  constructor(private http: HttpClient) { }
  
  private Url = 'http://localhost:8690';

  public getUsuarios() {
    return this.http.get<Usuario[]>(this.Url + '/allUsers');
  }

  public getAsesorConsultor(){
    return this.http.get<AsesorConultor>(this.Url + '/allUsers');
  }

  public getEmpresa(){
    return this.http.get<Empresa>(this.Url + '/allUsers');
  }

  public getSocioInversor(){
    return this.http.get<SocioInversor>(this.Url + '/allUsers');
  }
}