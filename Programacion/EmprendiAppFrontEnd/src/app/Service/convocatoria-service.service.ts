import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Convocatoria } from 'src/app/Modelos/Convocatoria';

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriaServiceService {

  constructor(private http:HttpClient) { }
  private Url = 'http://localhost:8690/Convocatorias';

  public obtenerConvocatorias(){
    return this.http.get<Convocatoria[]>(this.Url+'/all');
  }

  public obtenerConvocatoria(id){
    return this.http.get<Convocatoria>(this.Url+'/Convocatoria/'+id);
  }

  public nuevaConvocatoria(convocatoria){
    return this.http.post<Convocatoria>(this.Url+'/Convocatoria',convocatoria);
  }

  public actualizarConvocatoria(id,convocatoria){
    return this.http.put<Convocatoria>(this.Url+'/Convocatoria/'+id,convocatoria);
  }

  public eliminarConvocatoria(id){
    return this.http.delete<Convocatoria>(this.Url+'/Convocatoria/'+id);
  }
}
