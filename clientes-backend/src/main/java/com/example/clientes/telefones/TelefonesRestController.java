package com.example.clientes.telefones;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/api/telefones")		
public class TelefonesRestController {

	@Autowired
	private TelefonesService telefonesService;


	@GetMapping("/{id}")
	public ResponseEntity<Telefones> gettelefonesPorId(@PathVariable String id) throws Exception {
		try {
			return ResponseEntity.ok((telefonesService.getTelefonesPorId(id)));
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
	}

	@GetMapping
	@ApiOperation(value = "lista", response = Telefones.class)
	public ResponseEntity<List<Telefones>> lista() throws Exception {
		try {
			return ResponseEntity.ok().body(telefonesService.getAllTelefoness());
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deletetelefones(@PathVariable String id) throws Exception {
		try {
			telefonesService.deleteTelefones(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
	}

}
