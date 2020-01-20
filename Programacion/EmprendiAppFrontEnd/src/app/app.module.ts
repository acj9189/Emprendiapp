import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Usuario/listar/listar.component';
import { AddComponent } from './Usuario/add/add.component';
import { EditComponent } from './Usuario/edit/edit.component';
import { FormsModule} from '@angular/forms';
import { ServiceService } from "../app/Service/userService";
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BuscarFiltroComponent } from './buscar-filtro/buscar-filtro.component';
import { EnviarMensajeComponent } from './enviar-mensaje/enviar-mensaje.component';
import { InfoEmpresaComponent } from './Empresa/info-empresa/info-empresa.component';
import { InfoSocioComponent } from './Socio/info-socio/info-socio.component';
import { InfoInversorComponent } from './Inversor/info-inversor/info-inversor.component';
import { InfoAsesorComponent } from './Asesor/info-asesor/info-asesor.component';
import { InfoConsultorComponent } from './Consultor/info-consultor/info-consultor.component';
import { RegistroEmpresaComponent } from './Empresa/registro-empresa/registro-empresa.component';
import { RegistroInversorComponent } from './Inversor/registro-inversor/registro-inversor.component';
import { RegistrarSocioComponent } from './Socio/registrar-socio/registrar-socio.component';
import { RegistroAesorComponent } from './Asesor/registro-aesor/registro-aesor.component';
import { RegitroConsultorComponent } from './Consultor/regitro-consultor/regitro-consultor.component';
import { RemoverEmpresaComponent } from './Empresa/remover-empresa/remover-empresa.component';
import { EditarEmpresaComponent } from './Empresa/editar-empresa/editar-empresa.component';
import { InfoProductoComponent } from './Producto/info-producto/info-producto.component';
import { RegistrarProductoComponent } from './Producto/registrar-producto/registrar-producto.component';
import { EditarProductoComponent } from './Producto/editar-producto/editar-producto.component';
import { RemoverProductoComponent } from './Producto/remover-producto/remover-producto.component';
import { InfoAdministradorComponent } from './Administrador/info-administrador/info-administrador.component';
import { EditarAdministradorComponent } from './Administrador/editar-administrador/editar-administrador.component';
import { RemoverAdministradorComponent } from './Administrador/remover-administrador/remover-administrador.component';
import { AgregarAdministradorComponent } from './Administrador/agregar-administrador/agregar-administrador.component';
import { MenuAdministradorComponent } from './Administrador/menu-administrador/menu-administrador.component';
import { MenuAsesorComponent } from './Asesor/menu-asesor/menu-asesor.component';
import { MenuConsultorComponent } from './Consultor/menu-consultor/menu-consultor.component';
import { MenuEmpresaComponent } from './Empresa/menu-empresa/menu-empresa.component';
import { MenuInversorComponent } from './Inversor/menu-inversor/menu-inversor.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    PrincipalComponent,
    HeaderComponent,
    FooterComponent,
    BuscarFiltroComponent,
    EnviarMensajeComponent,
    InfoEmpresaComponent,
    InfoSocioComponent,
    InfoInversorComponent,
    InfoAsesorComponent,
    InfoConsultorComponent,
    RegistroEmpresaComponent,
    RegistroInversorComponent,
    RegistrarSocioComponent,
    RegistroAesorComponent,
    RegitroConsultorComponent,
    RemoverEmpresaComponent,
    EditarEmpresaComponent,
    InfoProductoComponent,
    RegistrarProductoComponent,
    EditarProductoComponent,
    RemoverProductoComponent,
    InfoAdministradorComponent,
    EditarAdministradorComponent,
    RemoverAdministradorComponent,
    AgregarAdministradorComponent,
    MenuAdministradorComponent,
    MenuAsesorComponent,
    MenuConsultorComponent,
    MenuEmpresaComponent,
    MenuInversorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
