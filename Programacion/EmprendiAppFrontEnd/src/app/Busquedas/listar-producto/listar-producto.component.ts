import { Component, OnInit, Input } from '@angular/core';
import { ProductoServicio } from 'src/app/Modelos/ProductoServicio';
import { ProductoServicioService } from 'src/app/Service/producto-servicio.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  @Input() private tipo:String;
  private producto:ProductoServicio[];
  constructor(private router:Router,private service:ProductoServicioService) { 
  }

  
  ngOnInit() {
    this.service.getProductos().subscribe(data=>{
      this.producto=data;
    }); 
  }

  public registrarProducto(){
    this.router.navigate(['registroProducto']);
  }
  
  public removerProducto(id){
    //console.log(id);
    this.router.navigate(['removerProducto',id]);
  }

  public infoProducto(id){
    //console.log(id);
    this.router.navigate(['verProductoAdmin',id]);
  }

  public actualizarProducto(id){
    this.router.navigate(['editarProducto',id]);
  }
public BotonMostrar(){
    if(this.tipo="1"){
      return true;
    }
    return false;
  }
}
