import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Cliente } from '../../interfaces/cliente';
import { Telefones } from 'src/app/interfaces/telefones';
import { FormGroup, FormBuilder, FormControl, NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/services/cliente.service';
import * as uuid from 'uuid';
import { Router } from '@angular/router';
import { Emails } from 'src/app/interfaces/emails';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormUsuarioComponent  {
  @Input() cliente: Cliente = <Cliente>{};
  @Output() outputUsuario: EventEmitter<Cliente> = new EventEmitter();
  @ViewChild('tipofoneInput', {static: false}) tipofoneInput: ElementRef;
  @ViewChild('emailInput', {static: false}) emailInput: ElementRef;
  public perfil: string;
  public tipofone: number;
  public foneInput1: string;
  public foneInput2: string;

  constructor(private usuarioService: UsuarioService, private router: Router, private http: HttpClient){
    this.perfil = localStorage.getItem('usuario');
    if (this.perfil != 'admin')
      this.router.navigate(['cliente/listar']);
      
    this.cliente.telefones = [];
    this.cliente.emails = [];
    
  }

  onSubmit() {
    this.cliente.cpf = this.cliente.cpf.replace('.', '').replace('.', '').replace('-', '');
    this.cliente.telefones.forEach(fone => fone.numero = fone.numero.replace('(', '').replace(')', '').replace('-', ''));
    this.cliente.cep = this.cliente.cep.replace('-', '');
    if(this.cliente.telefones.length <= 0)
      alert("Pelo menos um telefone deve ser cadastrado");
    if(this.cliente.emails.length <= 0)
      alert("Pelo menos um email deve ser cadastrado");
    else
      this.outputUsuario.emit(this.cliente);
  }

  addFone() {
    let fone: Telefones = new Telefones();
    fone.numero = this.tipofoneInput.nativeElement.value == 'celular' ? this.foneInput2 : this.foneInput1;
    fone.tipo = this.tipofoneInput.nativeElement.value;
    fone.id = uuid.v4();;
    this.cliente.telefones.push(fone);
  }

  deletaFone(fone: Telefones){
    this.cliente.telefones.splice(this.cliente.telefones.indexOf(fone), 1);    
  }

  addEmail() {
    let email: Emails = new Emails();
    email.email = this.emailInput.nativeElement.value;
    email.id = uuid.v4();
    this.cliente.emails.push(email);
  }

  deletaEmail(email: Emails){
    this.cliente.emails.splice(this.cliente.emails.indexOf(email), 1);    
  }

  changeFone(){
    if(this.tipofoneInput.nativeElement.value == 'celular')
      this.tipofone = 2;
    else
      this.tipofone = 1;
  }

  buscaCep(){
    this.cliente.cep;
    if(this.cliente.cep.length > 8){
      this.http
        .get('http://viacep.com.br/ws/'+this.cliente.cep.replace('-', '')+'/json')
        .subscribe(resp => {
          this.cliente.logradouro = resp['logradouro'];
          this.cliente.bairro = resp['bairro'];
          this.cliente.cidade = resp['localidade'];
          this.cliente.uf = resp['uf'];
      });
    }

  }

}
