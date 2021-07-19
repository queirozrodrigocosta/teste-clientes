package com.example.clientes.telefones;

import javax.persistence.Entity;

import org.springframework.data.annotation.Id;


import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.ToString;


@AllArgsConstructor @ToString @EqualsAndHashCode 
@Entity
public class Telefones {

	@Id
	private String id;

	private String numero;

	private String tipo;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}


	public Telefones(String id, String numero, String tipo) {
		super();
		this.id = id;
		this.numero = numero;
		this.tipo = tipo;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	
	

}
