import { Injectable } from '@angular/core';
import { ProductoServicio } from '../Modelos/ProductoServicio';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoServicioService {
  
  constructor(private http: HttpClient) { }

  private Url = 'http://localhost:8690/empresas';

  public getProductos(){
    return this.http.get<ProductoServicio[]>(this.Url+'/producto/producto/all');
  }

  public getServicios(){
    return this.http.get<ProductoServicio[]>(this.Url+'/producto/servicio/all');
  }

  public getProductoServicio(id){
    return this.http.get<ProductoServicio>(this.Url+'/producto/'+id);
  }

  public nuevoProductoServicio(productoServicio){
    return this.http.post<ProductoServicio>(this.Url+'/producto',productoServicio);
  }

  public actualizarProductoServicio(id,productoServicio){
    return this.http.put<ProductoServicio>(this.Url+'/producto/'+id,productoServicio);
  }

  public removerProductoServicio(id){
    return this.http.delete<ProductoServicio>(this.Url+'/producto/'+id);
  }
}
