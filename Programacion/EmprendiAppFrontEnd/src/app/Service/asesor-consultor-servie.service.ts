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
    return this.http.post<AsesorConultor>(this.Url+'/asesor/'+id,null);
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


  public getAsesoresPorAreas(areas){
    alert("hay problemas en el backend");
    return this.http.post<AsesorConultor[]>(this.Url+'/asesor/asesor/'+0+'/verAreas/'+areas,null);
  }

  public getAsesorHora(hora){
    alert("hablar sobre el return");
    return this.http.post<AsesorConultor[]>(this.Url+'/asesor/asesor/ver/'+hora,null);
  }

  public getAsesorHoraMenor(hora){
    alert("creo que actualmente funciona");
    return this.http.post<AsesorConultor[]>(this.Url+'/asesor/asesor/ver/menor/'+hora,null);
  }

  public getAsesorHoraMayor(hora){
    alert("creo que actualmente funciona");
    return this.http.post<AsesorConultor[]>(this.Url+'/asesor/asesor/ver/mayor/'+hora,null);
  }

  public getConsultoresPorAreas(areas){
    alert("el backend no funciona");
    return this.http.post<AsesorConultor[]>(this.Url+'/asesor/consultor/'+0+'/ver/'+areas,null);
  }

  public getConsultoresPorHoras(hora){
    alert("funciona creo");
    return this.http.post<AsesorConultor[]>(this.Url+'/asesor/consultor/'+0+'/ver/'+hora,null);
  }

  public getConsultorPorHoraMayor(hora){
    alert("creo que actualmente funciona");
    return this.http.post<AsesorConultor[]>(this.Url+'/asesor/consultor/'+0+'/ver/mayor/'+hora,null);
  }

  public getConsultorPorHoraMenor(hora){
    alert("creo que actualmente funciona");
    return this.http.post<AsesorConultor[]>(this.Url+'/asesor/consultor/'+0+'/ver/menor/'+hora,null);
  }
}
