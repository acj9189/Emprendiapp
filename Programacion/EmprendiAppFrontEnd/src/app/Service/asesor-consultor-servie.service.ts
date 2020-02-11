import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsesorConultor } from 'src/app/Modelos/AsesorConsultor';
@Injectable({
  providedIn: 'root'
})
export class AsesorConsultorServieService {

  constructor(private http:HttpClient) { }
  private Url = 'http://localhost:8690/Asesores';

  public getAsesores(){
    return this.http.get<AsesorConultor[]>(this.Url+'/asesor/asesor/all');
  }

  public getConsultores(){
    return this.http.get<AsesorConultor[]>(this.Url+'/asesor/consultor/all');
  }

  public getAsesorOConsultor(id){
    return this.http.get<AsesorConultor>(this.Url+'/asesor/'+id);
  }

  public nuevoAsesorConsultor(asesorConsultor){
    return this.http.post<AsesorConultor>(this.Url+'/asesor',asesorConsultor);
  }

  public actualizarAsesorConsultor(id,asesorConcultor){
    return this.http.put<AsesorConultor>(this.Url+'/asesor/'+id,asesorConcultor);
  }

  public deleteAsesorConcultor(id){
    return this.http.delete<AsesorConultor>(this.Url+'/usuario/'+id);
  }
}
