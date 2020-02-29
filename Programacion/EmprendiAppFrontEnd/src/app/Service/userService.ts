import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Modelos/Usuario';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  usuario: Usuario;
  constructor(private http: HttpClient) { }
  
  private Url = 'http://localhost:8690/usuarios';

  public getUsuarios() {
    return this.http.get<Usuario[]>(this.Url + '/all');
  }

  public addUsuarios(usuario/*: Usuario*/){
    return this.http.post<Usuario>(this.Url + '/usuario', usuario);
  }

  public getUsusario(id){
    return this.http.get<Usuario>(this.Url+'/usuario/'+id);
  }
 
  public nuevoUsuario(usuario){
    return this.http.post<Usuario>(this.Url+'/usuario',usuario);
  }

  public updateUsuario(id,usuario){
    return this.http.put<Usuario>(this.Url+'/usuario/'+id,usuario);
  }

  public deleteUsuario(id){
    return this.http.delete<Usuario>(this.Url+'/usuario/'+id);
  }

  public enviarMensaje(id,Mensaje){
    return this.http.post<Usuario>(this.Url+'/usuario/enviar/Mensaje/'+id,Mensaje);
  }

  public getAllMensajes(id){
    return this.http.post<Usuario>(this.Url+'/usuario/'+id+'/ver/Mensajes/',null);
  }

  public getMensajeEspecifico(id,contenido){
    return this.http.post<Usuario>(this.Url+'usuario/'+id+'/ver/Mensajes/'+contenido,null);
  }

  public getMensajeEspecificoDestiniatario(id,destinatario){
    return this.http.post<Usuario>(this.Url+'usuario/'+id+'/ver/Mensajes/'+destinatario,null);
  }

  public getMensajeEspecificoFecha(id,fecha){
    return this.http.post<Usuario>(this.Url+'usuario/'+id+'/ver/Mensajes/'+fecha,null);
  }

  public getMensajeEspecificoAsunto(id,asunto){
    return this.http.post<Usuario>(this.Url+'usuario/'+id+'/ver/Mensajes/'+asunto,null);
  }
  
  public getMensajeEspecificoPalabra(id,palabra){
    return this.http.post<Usuario>(this.Url+'usuario/'+id+'/ver/Mensajes/'+palabra,null);
  }

  public getUsuarioNombre(nombre){
    return this.http.post<Usuario>(this.Url+'usuario/'+nombre,null);
  }

  public getUsuarioDireccion(direccion){
    return this.http.post<Usuario>(this.Url+'usuario/'+direccion,null);
  }

  public getUsuarioApellido(apellido){
    return this.http.post<Usuario>(this.Url+'usuario/'+apellido,null);
  }
}