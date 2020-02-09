package com.EmprendiApp.Controllers;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.EmprendiApp.Models.Mensaje;
import com.EmprendiApp.Respositories.MensajeRepository;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/Mensajes")
@RestController
@JsonIgnoreProperties(ignoreUnknown = true) 
public class MensajeController {
	
	@Autowired
	private MensajeRepository mensajeRepository;
	

	@GetMapping("/all")
	@ResponseBody
	public List<Mensaje> getAllMensajes(){
		return mensajeRepository.findAll();
	}
	
	@GetMapping("/Mensaje/{id}")
	@ResponseBody
	public Optional<Mensaje> getMensaje(@PathVariable Integer id) {
		return mensajeRepository.findById(id);
	}

	@PostMapping("/Mensaje")
	@ResponseBody
	public Mensaje nuevoMensaje(@Valid @RequestBody Mensaje mensaje) {
		return mensajeRepository.save(mensaje);
	}

	@PutMapping("/Mensaje/{id}")
	@ResponseBody
	public ResponseEntity<Mensaje> updateMensaje(@PathVariable(value = "id") Integer Id,
			@Valid @RequestBody Mensaje mensaje) throws ResourceNotFoundException {

		Mensaje mensajeBuscado = mensajeRepository.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("No se encontro el Usuario  :: " + Id));
		mensajeBuscado.setContenido(mensaje.getContenido());
		mensajeBuscado.setRecibido(mensaje.getRecibido());
		mensajeBuscado.setFechaRealizadoMensaje(mensaje.getFechaRealizadoMensaje());
		final Mensaje updatedMensaje = mensajeRepository.save(mensajeBuscado);
		return ResponseEntity.ok(updatedMensaje);
	}

	@DeleteMapping("/Mensaje/{id}")
	@ResponseBody
	public boolean deleteMensaje(@PathVariable(value = "id") Integer Id) throws ResourceNotFoundException {
		boolean response = false;
		Mensaje deleteMensaje = mensajeRepository.findById(Id).orElseThrow(
				() -> new ResourceNotFoundException("No se encontro el mensaje a eliminar :: " + Id));
		mensajeRepository.delete(deleteMensaje);
		response = true;
		return response;
	}

}
