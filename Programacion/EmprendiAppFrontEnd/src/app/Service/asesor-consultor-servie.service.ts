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
    console.log(id);
    return this.http.post<AsesorConultor>(this.Url+'/asesor/'+id,Number(id));
  }
  public nuevoAsesorConsultor(asesorConsultor){
    console.log(asesorConsultor);
    return this.http.post<AsesorConultor>(this.Url+'/asesor',asesorConsultor);
  } 

  public actualizarAsesorConsultor(id,asesorConcultor){
    return this.http.put<AsesorConultor>(this.Url+'/asesor/'+id,asesorConcultor);
  }

  public deleteAsesorConcultor(id){
    return this.http.delete<AsesorConultor>(this.Url+'/usuario/'+id);
  }


  public getAsesoresPorAreas(areas){
    return this.http.post<AsesorConultor[]>(this.Url+'/asesor/asesor/ver/areas',areas);
  }

  public getAsesorHora(hora){
    return this.http.post<AsesorConultor[]>(this.Url+'/asesor/asesor/ver/horas',hora);
  }

  public getAsesorHoraMenor(hora){
    return this.http.post<AsesorConultor[]>(this.Url+'/asesor/asesor/ver/hora/menor',Number(hora));
  }

  public getAsesorHoraMayor(hora){
    return this.http.post<AsesorConultor[]>(this.Url+'/asesor/asesor/ver/hora/mayor',Number(hora));
  }

  public getAsesorPorNombre(nombre){
    return this.http.post<AsesorConultor[]>(this.Url+'/asesor/asesor/buscar/nombre',nombre);
  }

  public getAsesorPorApellido(apellido){
    return this.http.post<AsesorConultor[]>(this.Url+'/asesor/asesor/buscar/apellido',apellido);
  }

  public getAsesorPorDireccion(direccion){
    console.log(direccion);
    return this.http.post<AsesorConultor[]>(this.Url+'/asesor/asesor/buscar/direccion',String(direccion));
  }

  public getConsultoresPorAreas(areas){
    return this.http.post<AsesorConultor[]>(this.Url+'/asesor/consultor/ver/areas',areas);
  }
 
  public getConsultoresPorHoras(hora){
    return this.http.post<AsesorConultor[]>(this.Url+'/asesor/consultor/ver/hora',hora);
  }

  public getConsultorPorHoraMayor(hora){
    return this.http.post<AsesorConultor[]>(this.Url+'/asesor/consultor/ver/mayor',hora);
  }

  public getConsultorPorHoraMenor(hora){
    return this.http.post<AsesorConultor[]>(this.Url+'/asesor/consultor/ver/menor',hora);
  }

  public getConsultorPorNombre(nombre){
    return this.http.post<AsesorConultor[]>(this.Url+'/asesor/consultor/buscar/nombre',nombre);
  }

  public getConsultorPorDireccion(direccion){
    return this.http.post<AsesorConultor[]>(this.Url+'/asesor/consultor/buscar/direccion',direccion);
  }

  public getConsultorPorApellido(apellido){
    return this.http.post<AsesorConultor[]>(this.Url+'/asesor/consultor/buscar/apellido',apellido);
  }
}
