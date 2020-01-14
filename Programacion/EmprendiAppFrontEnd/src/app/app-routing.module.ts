import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Usuario/listar/listar.component';
import { AddComponent } from './Usuario/add/add.component';
import { EditComponent } from './Usuario/edit/edit.component';
import { PrincipalComponent } from './principal/principal.component';
import { BuscarFiltroComponent } from './buscar-filtro/buscar-filtro.component';
import { EnviarMensajeComponent } from './enviar-mensaje/enviar-mensaje.component';
import { InfoEmpresaComponent } from './Empresa/info-empresa/info-empresa.component'
import { InfoSocioComponent } from './Socio/info-socio/info-socio.component'
import { InfoInversorComponent } from './Inversor/info-inversor/info-inversor.component'
import { InfoConsultorComponent } from './Consultor/info-consultor/info-consultor.component'
import { InfoAsesorComponent } from './Asesor/info-asesor/info-asesor.component'
import { RegistroEmpresaComponent } from './Empresa/registro-empresa/registro-empresa.component'
import { RegistroInversorComponent } from './Inversor/registro-inversor/registro-inversor.component'

const routes: Routes = [
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
