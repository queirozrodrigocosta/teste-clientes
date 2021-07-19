package com.example.clientes.cliente;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/api/clientes")		
public class ClientesRestController {

	@Autowired
	private ClientesService clientesService;

	@PostMapping
	public ResponseEntity<Clientes> createUpdateClientes(@RequestBody Clientes clientes)  {
		try {
			clientes = clientesService.createUpdateClientes(clientes);
		} catch (Exception e) {
			e.printStackTrace();
            return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
		return new ResponseEntity<>(clientes, HttpStatus.CREATED);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Clientes> getclientesPorId(@PathVariable String id) throws Exception {
		try {
		return ResponseEntity.ok((clientesService.getClientesPorId(id)));
	} catch (Exception e) {
		e.printStackTrace();
        return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);

	}		
	}

	@GetMapping
	@ApiOperation(value = "lista", response = Clientes.class)
	public ResponseEntity<List<Clientes>> lista() throws Exception {
		try {
		return ResponseEntity.ok().body(clientesService.getAllClientess());
		} catch (Exception e) {
			e.printStackTrace();
            return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteclientes(@PathVariable String id) throws Exception {
		try {
		clientesService.deleteClientes(id);
		return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
            return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
	}

}
