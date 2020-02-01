import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Modelos/Usuario';
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

  public addUsuarios(usuario/*: Usuario*/){
    return this.http.post<Usuario>(this.Url + '/usuario', usuario);
  }
 
}