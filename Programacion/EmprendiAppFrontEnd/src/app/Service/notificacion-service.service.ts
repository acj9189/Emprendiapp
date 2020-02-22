import { Injectable } from '@angular/core';
import { Notificacion } from '../Modelos/Notificacion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificacionServiceService {

  constructor(private http:HttpClient) { }
  
  private Url = 'http://localhost:8690/Notificaciones';

  public obtenerNotificacion(id){
    return this.http.get<Notificacion>(this.Url+'/notificacion/'+id);
  }

  public nuevaNotificacion(Notificacion){
    return this.http.post<Notificacion>(this.Url+'/notificacion',Notificacion);
  }

  public actualiarNotificacion(id,Notificacion){
    return this.http.put<Notificacion>(this.Url+'/notificacion/'+id,Notificacion);
  }

  public eliminarNotificacion(id){
    return this.http.delete<Notificacion>(this.Url+'/notificacion/'+id);
  }
}
