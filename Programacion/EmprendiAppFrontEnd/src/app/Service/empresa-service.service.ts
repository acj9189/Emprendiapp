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

  public getPersonaNatural(){
    return this.http.get<PersonaNaturalEmpresa[]>(this.Url+'/empresa/personaNarural/all');
  }


  public getEmpresa(){
    return this.http.get<PersonaNaturalEmpresa[]>(this.Url+'/empresa/empresa/all');
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

  //filtros:
  //nombre
  public getPersonalNaturalPorNombre(nombre){
    return this.http.post<PersonaNaturalEmpresa[]>(this.Url+'/empresa/personaNarural/ver/nombre/'+nombre,null);
  }

  public getEmpresaPorNombre(nombre){
    return this.http.post<PersonaNaturalEmpresa[]>(this.Url+'/empresa/empresa/ver/nombre',nombre);
  } 

  //direccion
  public getEmpresaPorDireccion(direccion){
    return this.http.post<PersonaNaturalEmpresa[]>(this.Url+'/empresa/empresa/ver/direccion',direccion);
  }

  public getPersonaNaturalPorDireccion(direccion){
    return this.http.post<PersonaNaturalEmpresa[]>(this.Url+'/empresa/personaNarural/ver/nombre/'+direccion,null);
  }

  //producto
  public getPersonaNaturalPorProducto(ProductoServicio){
    return this.http.post<PersonaNaturalEmpresa[]>(this.Url+'/empresa/personaNarural/ver/nombre/'+ProductoServicio,null);
  }

  public getEmpresaPorProducto(ProductoServicio){
    return this.http.post<PersonaNaturalEmpresa[]>(this.Url+'/empresa/empresa/ver/nombre/producto',ProductoServicio);
  }

  public getEmpresaRedesSocialers(redes){
    console.log(redes);
    return this.http.post<PersonaNaturalEmpresa[]>(this.Url+'/empresa/empresa/ver/redes',String(redes));
    }
}
