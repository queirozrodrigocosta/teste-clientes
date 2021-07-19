package com.example.clientes.cliente;

import javax.persistence.Entity;

import org.springframework.data.annotation.Id;


import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.ToString;


@AllArgsConstructor @ToString @EqualsAndHashCode 
@Entity
public class Emails {

	@Id
	private String id;

	private String email;


	public String getId() {
		return id;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public void setId(String id) {
		this.id = id;
	}


	public Emails(String id, String email) {
		super();
		this.id = id;
		this.email = email;
	}
	
	
	
	

}
