import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Usuario/listar/listar.component';
import { AddComponent } from './Usuario/add/add.component';
import { EditComponent } from './Usuario/edit/edit.component';
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [
  {path: 'listar', component: ListarComponent}, 
  {path: 'add', component: AddComponent}, 
  {path: 'edit', component: EditComponent},
  {path: 'principal', component: PrincipalComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
