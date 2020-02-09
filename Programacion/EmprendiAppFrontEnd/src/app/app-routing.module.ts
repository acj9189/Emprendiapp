import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Usuario/listar/listar.component';
import { AddComponent } from './Usuario/add/add.component';
import { EditComponent } from './Usuario/edit/edit.component';
import { PrincipalComponent } from './principal/principal.component';
import { BuscarFiltroComponent } from './Busquedas/buscar-filtro/buscar-filtro.component';
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
import { EditarAsesorComponent } from './Asesor/editar-asesor/editar-asesor.component';
import { RemoverAsesorComponent } from './Asesor/remover-asesor/remover-asesor.component';
import { EditarConsultorComponent } from './Consultor/editar-consultor/editar-consultor.component';
import { RemoverConsultorComponent } from './Consultor/remover-consultor/remover-consultor.component';
import { EditarInversorComponent } from './Inversor/editar-inversor/editar-inversor.component';
import { RemoverInversorComponent } from './Inversor/remover-inversor/remover-inversor.component';
import { EditarSocioComponent } from './Socio/editar-socio/editar-socio.component';
import { RemoverSocioComponent } from './Socio/remover-socio/remover-socio.component';
import { ListarAdminEditComponent } from './Busquedas/listar-admin/listar-admin-edit.component';
import { ListaAdminComponent } from './Administrador/lista-admin/lista-admin.component';
import { ListaAsesorComponent } from './Administrador/lista-asesor/lista-asesor.component';
import { ListaConsultorComponent } from './Administrador/lista-consultor/lista-consultor.component';
import { ListaEmpresaComponent } from './Administrador/lista-empresa/lista-empresa.component';
import { ListaInversorComponent } from './Administrador/lista-inversor/lista-inversor.component';
import { ListaProductoComponent } from './Administrador/lista-producto/lista-producto.component';
import { ListaSocioComponent } from './Administrador/lista-socio/lista-socio.component';
import { VerSocioComponent } from './Socio/ver-socio/ver-socio.component';
import { VerSocioAdminComponent } from './Administrador/ver-socio-Admin/ver-socio-Admin.component';
import { VerInversorComponent } from './Inversor/ver-inversor/ver-inversor.component';
import { VerInversorAdminComponent } from './Administrador/ver-inversor-admin/ver-inversor-admin.component';
import { VerEmpresaAdminComponent } from './Administrador/ver-empresa-admin/ver-empresa-admin.component';
import { VerEmpresaComponent } from './Empresa/ver-empresa/ver-empresa.component';

const routes: Routes = [
  {path: 'verEmpresa/:id',component:VerEmpresaComponent},
  {path: 'verEmpresaAdmin/:id',component:VerEmpresaAdminComponent},
  {path: 'verInversorAdmin/:id',component:VerInversorAdminComponent},
  {path: 'verInversor/:id',component:VerInversorComponent},
  {path: 'verSocio/:id',component:VerSocioComponent},
  {path: 'verSocioAdmin/:id',component:VerSocioAdminComponent},
  {path: 'listaSocio',component:ListaSocioComponent},
  {path: 'listaProducto',component:ListaProductoComponent},
  {path: 'listaInversor',component:ListaInversorComponent},
  {path: 'listaEmpresa',component:ListaEmpresaComponent},
  {path: 'listaConsultor',component:ListaConsultorComponent},
  {path: 'listaAsesor',component:ListaAsesorComponent},
  {path: 'listaAdmin',component:ListaAdminComponent},
  {path: 'listarAdministradorEdit',component:ListarAdminEditComponent},
  {path: 'agregarAdministrador',component:AgregarAdministradorComponent},
  {path: 'removerAdministrador',component:RemoverAdministradorComponent},
  {path: 'editarAdministradr',component:EditarAdministradorComponent},
  {path: 'infoAdministrador',component:InfoAdministradorComponent},
  {path: 'registrarSocio',component:RegistrarSocioComponent},
  {path: 'editarSocio/:id',component:EditarSocioComponent},
  {path: 'removerSocio/:id', component:RemoverSocioComponent},
  {path: 'removerProducto',component:RemoverProductoComponent},
  {path: 'registroProducto',component:RegistrarProductoComponent},
  {path: 'infoProducto',component:InfoProductoComponent},
  {path: 'editarProducto',component:EditarProductoComponent},
  {path: 'registroConsultor',component:RegitroConsultorComponent},
  {path: 'editarConsultor',component:EditarConsultorComponent},
  {path: 'remverConsultor',component:RemoverConsultorComponent},
  {path: 'registroAsesor',component:RegistroAesorComponent},
  {path: 'editarAsesor',component:EditarAsesorComponent},
  {path: 'removerAsesor',component:RemoverAsesorComponent},
  {path: 'removerEmpresa/:id', component:RemoverEmpresaComponent},
  {path: 'editEmpresa/:id', component:EditarEmpresaComponent},
  {path: 'listar', component: ListarComponent}, 
  {path: 'add', component: AddComponent}, 
  {path: 'edit', component: EditComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: 'buscarFiltro', component: BuscarFiltroComponent},
  {path: 'enviarMensaje', component: EnviarMensajeComponent},
  {path: 'infoEmpresa/:id',component: InfoEmpresaComponent},
  {path: 'infoSocio/:id' , component: InfoSocioComponent},
  {path: 'infoInversor', component: InfoInversorComponent},
  {path: 'editarInversor',component: EditarInversorComponent},
  {path: 'removerInversor',component: RemoverInversorComponent},
  {path: 'infoConsultor', component: InfoConsultorComponent},
  {path: 'infoAsesor', component: InfoAsesorComponent},
  {path: 'regEmpresa', component: RegistroEmpresaComponent},
  {path: 'regInversor', component: RegistroInversorComponent},
  {path: '',redirectTo:'principal',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//Administrador