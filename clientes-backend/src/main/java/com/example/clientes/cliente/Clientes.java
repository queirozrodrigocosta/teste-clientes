package com.example.clientes.cliente;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;

import org.springframework.data.annotation.Id;

import com.example.clientes.telefones.Telefones;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.ToString;


@AllArgsConstructor @ToString @EqualsAndHashCode 
@Entity
public class Clientes {

	@Id
	private String id;

	private String nome;
	
	private String cpf;
	
	private String cep;
	
	private String logradouro;
	
	private String bairro;
	
	private String cidade;
	
	private String uf;

	private List<Emails> emails;	

	private List<Telefones> telefones;

	private Date dataOperacaoAlteracao;
	
	private String usuarioOperacaoAlteracao;
	
	private Date dataOperacaoInclusao;
	
	private String usuarioOperacaoInclusao;


	public Date getDataOperacaoAlteracao() {
		return dataOperacaoAlteracao;
	}

	public void setDataOperacaoAlteracao(Date dataOperacaoAlteracao) {
		this.dataOperacaoAlteracao = dataOperacaoAlteracao;
	}

	public String getUsuarioOperacaoAlteracao() {
		return usuarioOperacaoAlteracao;
	}

	public void setUsuarioOperacaoAlteracao(String usuarioOperacaoAlteracao) {
		this.usuarioOperacaoAlteracao = usuarioOperacaoAlteracao;
	}

	public Date getDataOperacaoInclusao() {
		return dataOperacaoInclusao;
	}

	public void setDataOperacaoInclusao(Date dataOperacaoInclusao) {
		this.dataOperacaoInclusao = dataOperacaoInclusao;
	}

	public String getUsuarioOperacaoInclusao() {
		return usuarioOperacaoInclusao;
	}

	public void setUsuarioOperacaoInclusao(String usuarioOperacaoInclusao) {
		this.usuarioOperacaoInclusao = usuarioOperacaoInclusao;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public List<Telefones> getTelefones() {
		return telefones;
	}

	public void setTelefones(List<Telefones> telefones) {
		this.telefones = telefones;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getLogradouro() {
		return logradouro;
	}

	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getUf() {
		return uf;
	}

	public void setUf(String uf) {
		this.uf = uf;
	}

	public Clientes(String id, String nome, String cpf, String cep, String logradouro, String bairro, String cidade,
			String uf, List<Telefones> telefones, List<Emails> emails) {
		super();
		this.id = id;
		this.nome = nome;
		this.cpf = cpf;
		this.cep = cep;
		this.logradouro = logradouro;
		this.bairro = bairro;
		this.cidade = cidade;
		this.uf = uf;
		this.telefones = telefones;
		this.emails = emails;
	}

	public List<Emails> getEmails() {
		return emails;
	}

	public void setEmails(List<Emails> emails) {
		this.emails = emails;
	}
	
	
}
