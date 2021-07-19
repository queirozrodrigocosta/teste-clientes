package com.example.clientes.telefones;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;



@Service
public class TelefonesService {


	@Autowired
	private TelefonesRepository telefonesRepository;

	public List<Telefones> getAllTelefoness() throws Exception {
		try {
			return telefonesRepository.findAll();
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public void deleteTelefones(String id) throws Exception {
		try {
			telefonesRepository.deleteById(id);
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public Telefones getTelefonesPorId(String id) throws Exception {
		try {
			Optional<Telefones> t = telefonesRepository.findById(id);
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
