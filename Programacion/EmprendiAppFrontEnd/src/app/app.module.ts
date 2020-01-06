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
    InfoEmpresaComponent
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
