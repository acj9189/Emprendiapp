import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaServiceService } from 'src/app/Service/empresa-service.service';
import { PersonaNaturalEmpresa } from 'src/app/Modelos/PersonaNaturalEmpresa';

@Component({
  selector: 'app-listar-empresa',
  templateUrl: './listar-empresa.component.html',
  styleUrls: ['./listar-empresa.component.css']
})
export class ListarEmpresaComponent implements OnInit {

  @Input() private tipo:String;
  constructor(private service:EmpresaServiceService, private router:Router) { 
  }

  personaEmpresa:PersonaNaturalEmpresa[];

  ngOnInit() {
    this.service.getEmpresa().subscribe(data=>{
      this.personaEmpresa=data;
    });
  }

  public crear(){
    this.router.navigate(['regEmpresa']);
  }

  public verEmpresaAdmin(id){
    this.router.navigate(['verEmpresaAdmin',id]);
  }

  public verEmpresa(id){
    this.router.navigate(['verEmpresa',id]);
  }

  public editarEmpresa(id){
    this.router.navigate(['editEmpresa',id]);
  }

  public eliminarEmpresa(id){
    this.router.navigate(['removerEmpresa',id]);
  }

  public BotonMostrar(){
    if(this.tipo="1"){
      return true;
    }
    return false;
  }

  public buscar(nombre,direccion,producto,palabra){
    this.personaEmpresa.length=0;
    if(nombre.value!="" && nombre.value!=null){
      this.buscarNombre(nombre.value);
    }
    if(direccion.value!="" && direccion.value!=null){
      this.buscarDireccion(direccion);  
    }
    if(producto.value!="" && producto.value!=null){
      this.buscarProducto(producto);
    }
    if(palabra.value!="" && producto.value!=null){
      this.buscarPorRedes(palabra.value);  
    }
  }

  public buscarPorRedes(redes){
    let empresaAux;
    this.service.getEmpresaRedesSocialers(redes).subscribe(data => {
      empresaAux = data;
      empresaAux.array.forEach(element => {
        if (!this.personaEmpresa.find(element.id)) {
          this.personaEmpresa.push(element);
        }
      });
    });
  }

  private buscarProducto(producto: any) {
    let empresaAux;
    this.service.getEmpresaPorProducto(producto).subscribe(data => {
      empresaAux = data;
      empresaAux.array.forEach(element => {
        if (!this.personaEmpresa.find(element.id)) {
          this.personaEmpresa.push(element);
        }
      });
    });
  }

  private buscarDireccion(direccion: any) {
    let empresaAux;
    this.service.getEmpresaPorDireccion(direccion).subscribe(data => {
      empresaAux = data;
      empresaAux.array.forEach(element => {
        if (!this.personaEmpresa.find(element.id)) {
          this.personaEmpresa.push(element);
        }
      });
    });
  }

  private buscarNombre(nombre: any) {
    let empresaAux;
    this.service.getEmpresaPorNombre(nombre).subscribe(data => {
      empresaAux = data;
      if(empresaAux.length>1){
        empresaAux.array.forEach(element => {
          if (!this.personaEmpresa.find(element.id)) {
            this.personaEmpresa.push(element);
          }
        });
      }else{
        this.personaEmpresa.push(empresaAux[0]);
      }
    });
  }
}
