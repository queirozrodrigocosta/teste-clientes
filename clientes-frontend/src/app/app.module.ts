import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { InputMaskModule } from 'primeng/inputmask';
import {InputTextModule} from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuarioComponent } from './paginas/cliente/lista-cliente/lista-cliente.component';
import { FormUsuarioComponent } from './compartilhado/form-cliente/form-cliente.component';
import { CriarUsuarioComponent } from './paginas/cliente/criar-cliente/criar-cliente.component';
import { EditarUsuarioComponent } from './paginas/cliente/editar-cliente/editar-cliente.component';
import { LoginComponent } from './paginas/login/login.component';

import { AuthGuard } from './auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaUsuarioComponent,
    FormUsuarioComponent,
    CriarUsuarioComponent,
    EditarUsuarioComponent       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InputMaskModule,
    InputTextModule,
    FormsModule    
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
