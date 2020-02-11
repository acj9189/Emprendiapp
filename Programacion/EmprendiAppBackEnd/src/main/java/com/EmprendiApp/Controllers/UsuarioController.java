package com.EmprendiApp.Controllers;

import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.ListIterator;
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
import com.EmprendiApp.Models.Usuario;
import com.EmprendiApp.Respositories.UsuarioRepository;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/usuarios")
@RestController
@JsonIgnoreProperties(ignoreUnknown = true) 
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository userRepository;
	

	@GetMapping("/all")
	@ResponseBody
	public List<Usuario> getAllUsuarios(){
		return userRepository.findAll();
	}
	
	@GetMapping("/usuario/{id}")
	@ResponseBody
	public Optional<Usuario> getUsuario(@PathVariable Integer id) {
		return userRepository.findById(id);
	}

	@PostMapping("/usuario")
	@ResponseBody
	public Usuario nuevoUsuario(@Valid @RequestBody Usuario ususario) {
		return userRepository.save(ususario);
	}

	@PutMapping("/usuario/{id}")
	@ResponseBody
	public ResponseEntity<Usuario> updateUsuario(@PathVariable(value = "id") Integer Id,
			@Valid @RequestBody Usuario usuario) throws ResourceNotFoundException {

		Usuario usuarioBuscado = userRepository.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("No se encontro el Usuario  :: " + Id));
		usuarioBuscado.setNombres(usuario.getNombres());
		usuarioBuscado.setApellidos(usuario.getApellidos());
		usuarioBuscado.setDescripcionIntereses(usuario.getDescripcionIntereses());
		usuarioBuscado.setDireccionContacto(usuario.getDireccionContacto());
		usuarioBuscado.setEmail(usuario.getEmail());
		usuarioBuscado.setTelefono(usuario.getTelefono());
		final Usuario updatedUsuario = userRepository.save(usuarioBuscado);
		return ResponseEntity.ok(updatedUsuario);
	}

	@DeleteMapping("/usuario/{id}")
	@ResponseBody
	public boolean deleteUsuario(@PathVariable(value = "id") Integer Id) throws ResourceNotFoundException {
		boolean response = false;
		Usuario deleteUsuario = userRepository.findById(Id).orElseThrow(
				() -> new ResourceNotFoundException("No se encontro el usuario a eliminar :: " + Id));
		userRepository.delete(deleteUsuario);
		response = true;
		return response;
	}
	
	@PostMapping("/usuario/enviar/Mensaje/{id}")
	@ResponseBody
	public boolean enviarMensaje(@Valid @PathVariable Integer id, @Valid @RequestBody Mensaje mensaje) {
		//Falta enviar al correo
		boolean response = false;
		Usuario usuario = userRepository.findById(id).orElseThrow();
		if(usuario.getMensajesRealizados() != null) {
			usuario.getMensajesRealizados().add(mensaje);
			response = true;
		}
		else {
			usuario.setMensajesRealizados(new LinkedList<Mensaje>());
			usuario.getMensajesRealizados().add(mensaje);
			response = true;
		}
		return response;
	}
	
	@PostMapping("/usuario/{id}/ver/Mensajes/")
	@ResponseBody
	public List<Mensaje> getAllMensajes(@Valid @PathVariable Integer id){
		Usuario usuario = userRepository.findById(id).orElseThrow();
		return usuario.getMensajesRealizados();
	}
	
}
