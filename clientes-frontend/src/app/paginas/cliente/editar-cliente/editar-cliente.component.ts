import { Component, ViewChild } from '@angular/core';
import { UsuarioService } from '../../../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../../interfaces/cliente';
import { error } from 'util';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarUsuarioComponent {
  public cliente: Cliente = <Cliente>{};

  constructor(private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
      this.getUsuario(this.activatedRoute.snapshot.params.id);
    }

    getUsuario(id: string) {
      this.usuarioService.getUsuario(id)
        .subscribe((cliente: Cliente) => {
          this.cliente = cliente;
        }, (error) => { alert('Falha ao buscar cliente. ' + error.error);  }); 
    }

    atualizaUsuario(cliente: Cliente) {

      cliente.usuarioOperacaoAlteracao = localStorage.getItem('usuario');

      this.usuarioService.atualizaUsuario(cliente)
        .subscribe(
          () => { alert('Salvo com sucesso.'); this.router.navigateByUrl('/cliente/listar'); },
          (error) => { alert('Falha ao atualizar cliente. ' + error.error); });
    }

}
