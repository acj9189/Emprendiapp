import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonaNaturalEmpresa } from '../Modelos/PersonaNaturalEmpresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaServiceService {

  constructor(private http: HttpClient) { }
  empresaPersoan:PersonaNaturalEmpresa[];
  private Url = 'http://localhost:8690/empresas';

  public getPersonaEmpresa(){
    return this.http.get<PersonaNaturalEmpresa[]>(this.Url+'/all');
  }

  public crearPersonaEmpresa(personaEmpresa){
    return this.http.post<PersonaNaturalEmpresa>(this.Url+'/empresa',personaEmpresa);
  }

}
