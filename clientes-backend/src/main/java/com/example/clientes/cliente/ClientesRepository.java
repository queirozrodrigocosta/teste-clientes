package com.example.clientes.cliente;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface ClientesRepository extends MongoRepository<Clientes, String> {

	List<Clientes> findByNome(String nome);

	
}
