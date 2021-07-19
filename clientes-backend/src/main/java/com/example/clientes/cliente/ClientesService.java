package com.example.clientes.cliente;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class ClientesService {


	@Autowired
	private ClientesRepository clientesRepository;


	public Clientes createUpdateClientes(Clientes clientes) throws Exception {
		try {
			if (clientes.getId() == null && !clientesRepository.findByNome(clientes.getNome()).isEmpty()){
				throw new Exception("Cada usuário deve ser único");
			}

			if (clientes.getId() == null)
				clientes.setDataOperacaoInclusao(new Date());
			else
				clientes.setDataOperacaoAlteracao(new Date());
			
			return clientesRepository.save(clientes);	
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public List<Clientes> getAllClientess() throws Exception {
		try {
			return clientesRepository.findAll();
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public void deleteClientes(String id) throws Exception {
		try {
			clientesRepository.deleteById(id);
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public Clientes getClientesPorId(String id) throws Exception {
		try {
			Optional<Clientes> t = clientesRepository.findById(id);
			if (t.isPresent()) {
				return t.get();
			}
			else 
				throw new Exception("não encontrado");
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

}
