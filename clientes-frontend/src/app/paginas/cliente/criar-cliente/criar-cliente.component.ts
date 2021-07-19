import { Component, ViewChild } from '@angular/core';
import { UsuarioService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { Telefones } from 'src/app/interfaces/telefones';


@Component({
  selector: 'app-criar-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.css']
})
export class CriarUsuarioComponent {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  addUsuario(cliente: Cliente) {

    cliente.usuarioOperacaoInclusao = localStorage.getItem('usuario');

    this.usuarioService.addUsuario(cliente)
      .subscribe(
        () => { alert('Salvo com sucesso.'); this.router.navigateByUrl('/cliente/listar'); },
        (error) => { alert('Falha ao adicionar cliente. ' + error.error);  });
  }

}
