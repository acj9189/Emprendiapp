import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Usuario/listar/listar.component';
import { AddComponent } from './Usuario/add/add.component';
import { EditComponent } from './Usuario/edit/edit.component';
import { PrincipalComponent } from './principal/principal.component';
import { BuscarFiltroComponent } from './buscar-filtro/buscar-filtro.component';
import { EnviarMensajeComponent } from './enviar-mensaje/enviar-mensaje.component';
import { InfoEmpresaComponent } from './Empresa/info-empresa/info-empresa.component';
import { InfoSocioComponent } from './Socio/info-socio/info-socio.component';
import { InfoInversorComponent } from './Inversor/info-inversor/info-inversor.component';
import { InfoConsultorComponent } from './Consultor/info-consultor/info-consultor.component';
import { InfoAsesorComponent } from './Asesor/info-asesor/info-asesor.component';
import { RegistroEmpresaComponent } from './Empresa/registro-empresa/registro-empresa.component';
import { RegistroInversorComponent } from './Inversor/registro-inversor/registro-inversor.component';
import { EditarEmpresaComponent } from './Empresa/editar-empresa/editar-empresa.component';
import { RemoverEmpresaComponent } from './Empresa/remover-empresa/remover-empresa.component';
import { RegistroAesorComponent } from './Asesor/registro-aesor/registro-aesor.component';
import { RegitroConsultorComponent } from './Consultor/regitro-consultor/regitro-consultor.component';
import { EditarProductoComponent } from './Producto/editar-producto/editar-producto.component';
import { InfoProductoComponent } from './Producto/info-producto/info-producto.component';
import { RegistrarProductoComponent } from './Producto/registrar-producto/registrar-producto.component';
import { RemoverProductoComponent } from './Producto/remover-producto/remover-producto.component';
import { RegistrarSocioComponent } from './Socio/registrar-socio/registrar-socio.component';
import { InfoAdministradorComponent } from './Administrador/info-administrador/info-administrador.component';
import { EditarAdministradorComponent } from './Administrador/editar-administrador/editar-administrador.component';
import { RemoverAdministradorComponent } from './Administrador/remover-administrador/remover-administrador.component';
import { AgregarAdministradorComponent } from './Administrador/agregar-administrador/agregar-administrador.component';

const routes: Routes = [
  {path: 'agregarAdministrador',component:AgregarAdministradorComponent},
  {path: 'removerAdministrador',component:RemoverAdministradorComponent},
  {path: 'editarAdministradr',component:EditarAdministradorComponent},
  {path: 'infoAdministrador',component:InfoAdministradorComponent},
  {path: 'registrarSocio',component:RegistrarSocioComponent},
  {path: 'removerProducto',component:RemoverProductoComponent},
  {path: 'registroProducto',component:RegistrarProductoComponent},
  {path: 'infoProducto',component:InfoProductoComponent},
  {path: 'editarProducto',component:EditarProductoComponent},
  {path: 'registroConsultor',component:RegitroConsultorComponent},
  {path: 'registroAsesor',component:RegistroAesorComponent},
  {path: 'removerEmpresa', component:RemoverEmpresaComponent},
  {path: 'editEmpresa', component:EditarEmpresaComponent},
  {path: 'listar', component: ListarComponent}, 
  {path: 'add', component: AddComponent}, 
  {path: 'edit', component: EditComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: 'buscarFiltro', component: BuscarFiltroComponent},
  {path: 'enviarMensaje', component: EnviarMensajeComponent},
  {path: 'infoEmpresa',component: InfoEmpresaComponent},
  {path: 'infoSocio' , component: InfoSocioComponent},
  {path: 'infoInversor', component: InfoInversorComponent},
  {path: 'infoConsultor', component: InfoConsultorComponent},
  {path: 'infoAsesor', component: InfoAsesorComponent},
  {path: 'regEmpresa', component: RegistroEmpresaComponent},
  {path: 'regInversor', component: RegistroInversorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//Administrador