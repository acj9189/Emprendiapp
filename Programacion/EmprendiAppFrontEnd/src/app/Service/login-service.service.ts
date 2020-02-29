import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../Modelos/Login';
import { Usuario } from '../Modelos/Usuario';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }
  private Url = 'http://localhost:8690/loging';

  public Login(username,pasword){
    this.http.post<Usuario>(this.Url+'/login',username,pasword);
  }
}
