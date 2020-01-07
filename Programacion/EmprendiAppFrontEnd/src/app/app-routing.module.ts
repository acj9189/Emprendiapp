import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Usuario/listar/listar.component';
import { AddComponent } from './Usuario/add/add.component';
import { EditComponent } from './Usuario/edit/edit.component';
import { PrincipalComponent } from './principal/principal.component';
import { BuscarFiltroComponent } from './buscar-filtro/buscar-filtro.component';
import { EnviarMensajeComponent } from './enviar-mensaje/enviar-mensaje.component';
import { InfoEmpresaComponent } from './info-empresa/info-empresa.component'
import { InfoSocioComponent } from './info-socio/info-socio.component'
import { InfoInversorComponent } from './info-inversor/info-inversor.component'
import { InfoConsultorComponent } from './info-consultor/info-consultor.component'
import { InfoAsesorComponent } from './info-asesor/info-asesor.component'

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
  {path: 'infoAsesor', component: InfoAsesorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
