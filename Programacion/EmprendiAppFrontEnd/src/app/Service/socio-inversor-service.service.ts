import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SocioInversor } from '../Modelos/SocioInversor';

@Injectable({
  providedIn: 'root'
})
export class SocioInversorServiceService {

  constructor(private http: HttpClient) { }
  socio:SocioInversor[];
  private Url = 'http://localhost:8690/Socios';

  public getSocios(){
    return this.http.get<SocioInversor[]>(this.Url+'/socio/socio/all');
  }

  public getInversores(){
    return this.http.get<SocioInversor[]>(this.Url+'/socio/inversor/all');
  }

  public registrarSocio(socio){
    return this.http.post<SocioInversor>(this.Url+'/socio',socio);
  }

  public removeSocio(id){
    return this.http.delete<SocioInversor>(this.Url+'/socio/'+id);
  }

  public infoSocio(id){
    return this.http.get<SocioInversor>(this.Url+'/socio/'+id);
  }

  public updateSocio(id,socio){
    return this.http.put<SocioInversor>(this.Url+'/socio/'+id,socio);
  }
}
