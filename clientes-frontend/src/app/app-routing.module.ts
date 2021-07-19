import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaUsuarioComponent } from './paginas/cliente/lista-cliente/lista-cliente.component';
import { CriarUsuarioComponent } from './paginas/cliente/criar-cliente/criar-cliente.component';
import { EditarUsuarioComponent } from './paginas/cliente/editar-cliente/editar-cliente.component';
import { LoginComponent } from './paginas/login/login.component';
import { AuthGuard } from './auth.guard';




const routes: Routes = [
  { path: '', component: ListaUsuarioComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'cliente/listar', component: ListaUsuarioComponent, canActivate: [AuthGuard]},
  { path: 'cliente/criar', component: CriarUsuarioComponent, canActivate: [AuthGuard]},
  { path: 'cliente/editar/:id', component: EditarUsuarioComponent, canActivate: [AuthGuard]}, 
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
