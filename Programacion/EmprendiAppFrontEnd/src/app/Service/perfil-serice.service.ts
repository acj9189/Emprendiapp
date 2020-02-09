import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perfil } from '../Modelos/Perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilSericeService {

  constructor(private http: HttpClient) { }

  private Url = 'http://localhost:8690/perfiles';

  public getPerfil(id){
    return this.http.get<Perfil>(this.Url+'/perfil/'+id);
  }

  public nuevoPerfil(perfil){
    return this.http.post<Perfil>(this.Url+'/perfil',perfil);
  }

  public editarPerfil(id,perfil){
    return this.http.put<Perfil>(this.Url+'/perfil/'+id,perfil)
  }

  public deletePerfil(id){
    return this.http.delete<Perfil>(this.Url+'/perfil/'+id);
  }
}
