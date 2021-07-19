import { Telefones } from './telefones';
import { Emails } from './emails';

export interface Cliente {
 id: string;
 nome: string;
 cpf: string;
 cep: string;
 logradouro: string;
 bairro: string;
 cidade: string;
 uf: string;
 telefones: Array<Telefones>;
 emails: Array<Emails>;
 dataOperacaoAlteracao: Date;
 usuarioOperacaoAlteracao: string;
 dataOperacaoInclusao: Date;
 usuarioOperacaoInclusao: string;
}
