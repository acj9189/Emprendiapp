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
    return this.http.get<SocioInversor[]>(this.Url+'/all');
  }

  public registrarSocio(socio){
    console.log(socio);
    //console.log(socio.Usuario_id);
    return this.http.post<SocioInversor>(this.Url+'/socio',socio);
  }
}
