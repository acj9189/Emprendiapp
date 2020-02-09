import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mensaje } from '../Modelos/Mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeServiceService {

  constructor(private http: HttpClient) { }

  private Url = 'http://localhost:8690/Mensajes';

  public getMensajes(){
    return this.http.get<Mensaje[]>(this.Url+'/all');
  }
  
  public getMensaje(id){
    return this.http.get<Mensaje>(this.Url+'/Mensaje/'+id)
  }

  public nuevoMensaje(mensaje){
    return this.http.post<Mensaje>(this.Url+'/Mensaje',mensaje);
  }

  public cambiarMensaje(id,mensaje){
    return this.http.put<Mensaje>(this.Url+'/Mensaje/'+id,mensaje);
  }

  public remiverMensaje(id){
    return this.http.delete<Mensaje>(this.Url+'/Mensaje/'+id);
  }
}
