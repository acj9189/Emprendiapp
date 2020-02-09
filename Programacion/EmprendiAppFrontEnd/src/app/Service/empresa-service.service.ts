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

  public getPersonaEmpresas(){
    return this.http.get<PersonaNaturalEmpresa[]>(this.Url+'/all');
  }

  public getInfoPersnaEmpresa(id){
    return this.http.get<PersonaNaturalEmpresa>(this.Url+'/empresa/'+id);
  }

  public updatePersonaEmpresa(id,personaEmpresa){
    return this.http.put<PersonaNaturalEmpresa>(this.Url+'/empresa/'+id,personaEmpresa);
  }

  public removerPersoanEmpresa(id){
    return this.http.delete<PersonaNaturalEmpresa>(this.Url+'/empresa/'+id)
  }

  public crearPersonaEmpresa(personaEmpresa){
    return this.http.post<PersonaNaturalEmpresa>(this.Url+'/empresa',personaEmpresa);
  }

}
