import { Component, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: Usuario = new Usuario();
  @ViewChild('login', {static: false}) login: ElementRef;
  @ViewChild('senha', {static: false}) senha: ElementRef;

  constructor(    private router: Router    ) { 
    localStorage.removeItem('usuario');

  }


  onSubmit() {
    if(this.login.nativeElement.value == 'admin' && this.senha.nativeElement.value == '123456'
    || this.login.nativeElement.value == 'comun' && this.senha.nativeElement.value == '123456'){
      localStorage.setItem('usuario', this.login.nativeElement.value);
      this.router.navigate(['cliente/listar']);
    }
    else
      alert("usuário ou senha incorretos");
  }

}
