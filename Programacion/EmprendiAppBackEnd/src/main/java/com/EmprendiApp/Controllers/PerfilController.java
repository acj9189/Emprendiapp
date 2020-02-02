package com.EmprendiApp.Controllers;

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
import com.EmprendiApp.Models.Perfil;
import com.EmprendiApp.Respositories.PerfilRepository;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/perfiles")
@RestController
@JsonIgnoreProperties(ignoreUnknown = true) 
public class PerfilController {
	
	@Autowired
	private PerfilRepository perfilRepository;
	
	@GetMapping("/perfil/{id}")
	@ResponseBody
	private Optional<Perfil> getPerfil(@PathVariable Integer id) {
		return perfilRepository.findById(id);
	}
	
	@PostMapping("/perfil")
	@ResponseBody
	private Perfil NuevoPerfil(@Valid @RequestBody Perfil perfil) {
		return  perfilRepository.save(perfil);
	}
	
	@PutMapping("/perfil/{id}")
	@ResponseBody
	private ResponseEntity<Perfil> updatePerfil(@PathVariable(value = "id") Integer Id,
			@Valid @RequestBody Perfil perfilDitails) throws ResourceNotFoundException {

		Perfil perfil = perfilRepository.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("No se encontro el perfil : " + Id));
		perfil.setNombre(perfilDitails.getNombre());
		perfil.setDescripcion(perfilDitails.getDescripcion());
		final Perfil updatePerfil =  perfilRepository.save(perfil);
		return ResponseEntity.ok(updatePerfil);
	}

	@DeleteMapping("/empresa/{id}")
	@ResponseBody
	private boolean deletePerfil(@PathVariable(value = "id") Integer Id) throws ResourceNotFoundException {
		boolean response = false;
		Perfil deletePerfil = perfilRepository.findById(Id).orElseThrow(
				() -> new ResourceNotFoundException("No se encontro la empresa  o l;a persna natural a eliminar :: " + Id));
		perfilRepository.delete(deletePerfil);
		response = true;
		return response;
	}
	
	

}
