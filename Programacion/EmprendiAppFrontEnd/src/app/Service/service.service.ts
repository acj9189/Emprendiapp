import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { Usuario } from '../Modelos/Usuario';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  usuario:Usuario
  constructor(private http:HttpClient) { }

  private Url = 'http://localhost:8690/allUsers';

  public getUsuarios(){
    return this.http.get<Usuario[]>(this.Url);

  }
  

}
