import { Injectable } from '@angular/core';
import { Llamada } from '../Modelos/Llamada';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LlamdaServiceService {
  constructor(private http: HttpClient) { }

  private Url = 'http://localhost:8690/Llamadas';

  public getLlamdas(){
    return this.http.get<Llamada>(this.Url+'/all');
  }

  public getLlamada(id){
    return this.http.get<Llamada>(this.Url+'/Llamada/'+id)
  }

  public nuevaLlamada(llamada){
    return this.http.post<Llamada>(this.Url+'/Llamada',llamada);
  }

  public deleteLlamada(id){
    return this.http.delete<Llamada>(this.Url+'/Llamada/'+id);
  }
}
