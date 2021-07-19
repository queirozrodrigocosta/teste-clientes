import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';
import { Telefones } from '../interfaces/telefones';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getListaUsuarios(): Observable<Cliente[]> {
    const url = `${environment.apiUrl}/clientes`;
    return this.http.get<Cliente[]>(url);
  }

  getUsuario(id: string): Observable<Cliente> {
    const url = `${environment.apiUrl}/clientes/${id}`;
    return this.http.get<Cliente>(url);
  }

  addUsuario(cliente: Cliente): Observable<Cliente> {
    const url = `${environment.apiUrl}/clientes/`;
    return this.http.post<Cliente>(url, cliente);
  }

  atualizaUsuario(cliente: Cliente): Observable<Cliente> {
    const url = `${environment.apiUrl}/clientes/`;
    return this.http.post<Cliente>(url, cliente);
  }

  deletaUsuario(id: string): Observable<Cliente> {
    const url = `${environment.apiUrl}/clientes/${id}`;
    return this.http.delete<Cliente>(url);
  }

}
