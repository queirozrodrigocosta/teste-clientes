import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from '../../../services/cliente.service';
import { Cliente } from '../../../interfaces/cliente';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaUsuarioComponent implements OnInit {
  public usuarios: Cliente[];
  public perfil: string;

  constructor(private usuarioService: UsuarioService) {
    this.perfil = localStorage.getItem('usuario');
   }

  ngOnInit() {
    this.getListaUsuarios();
  }

  getListaUsuarios() {
    
    this.usuarioService.getListaUsuarios()
      .subscribe((usuarios: Cliente[]) => {
        this.usuarios = usuarios;
      }, (error) => { alert('Falha ao buscar usuarios. ' + error.error);  });
  }

  deletaUsuario(id: string) {
    this.usuarioService.deletaUsuario(id)
      .subscribe(() => {
        alert('Excluido com sucesso.'); this.getListaUsuarios();
      }, (error) => { alert('Falha ao deletar usuarios. ' + error.error);  });
  }

  existemUsuarios(): boolean {
    return this.usuarios && this.usuarios.length > 0;
  }

  perfilUsuario(): boolean {
    return this.perfil == 'admin';
  }

}
