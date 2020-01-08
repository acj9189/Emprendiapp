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
import { InfoEmpresaComponent } from './info-empresa/info-empresa.component';
import { InfoSocioComponent } from './info-socio/info-socio.component';
import { InfoInversorComponent } from './info-inversor/info-inversor.component';
import { InfoAsesorComponent } from './info-asesor/info-asesor.component';
import { InfoConsultorComponent } from './info-consultor/info-consultor.component';
import { RegistroEmpresaComponent } from './registro-empresa/registro-empresa.component';
import { RegistroInversorComponent } from './registro-inversor/registro-inversor.component';
import { RegistrarSocioComponent } from './registrar-socio/registrar-socio.component';
import { RegistroAesorComponent } from './registro-aesor/registro-aesor.component';
import { RegitroConsultorComponent } from './regitro-consultor/regitro-consultor.component';

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
    RegitroConsultorComponent
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
