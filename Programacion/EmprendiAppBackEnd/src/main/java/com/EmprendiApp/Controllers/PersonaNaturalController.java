package com.EmprendiApp.Controllers;

import java.util.LinkedList;
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
import com.EmprendiApp.Models.PersonaNaturalEmpresa;
import com.EmprendiApp.Respositories.PersonaNaturalEmpresaRepository;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/empresas")
@RestController
@JsonIgnoreProperties(ignoreUnknown = true) 
public class PersonaNaturalController {
	
	@Autowired
	private PersonaNaturalEmpresaRepository empresaRepository;

	@GetMapping("/all")
	@ResponseBody
	public List<PersonaNaturalEmpresa> getAllEmpresasPersonaNatural() {
		return empresaRepository.findAll();
	}
	
	@GetMapping("/empresa/personaNarural/all")
	@ResponseBody
	public List<PersonaNaturalEmpresa> getAllPersonasNaturales(){
		List<PersonaNaturalEmpresa> personaNatural = new LinkedList<>();
		List<PersonaNaturalEmpresa> personaNaturalEmpresas = empresaRepository.findAll();
		for(PersonaNaturalEmpresa persoNatural: personaNaturalEmpresas ) {
			if(persoNatural.isTipo()) {
				personaNatural.add(persoNatural);
			}
		}
		return personaNatural;	
	}
	
	@GetMapping("/empresa/empresa/all")
	@ResponseBody
	public List<PersonaNaturalEmpresa> getAllEmpresas(){
		List<PersonaNaturalEmpresa> empresa = new LinkedList<>();
		List<PersonaNaturalEmpresa> personaNaturalEmpresas = empresaRepository.findAll();
		for(PersonaNaturalEmpresa empresaT: personaNaturalEmpresas ) {
			if(!empresaT.isTipo()) {
				empresa.add(empresaT);
			}
		}
		return empresa;	
	}

	@GetMapping("/empresa/{id}")
	@ResponseBody
	public Optional<PersonaNaturalEmpresa> getEmpresa(@PathVariable Integer id) {
		return empresaRepository.findById(id);
	}

	@PostMapping("/empresa")
	@ResponseBody
	public PersonaNaturalEmpresa NuevaEmpresa(@Valid @RequestBody PersonaNaturalEmpresa empresa) {
		return empresaRepository.save(empresa);
	}

	@PutMapping("/empresa/{id}")
	@ResponseBody
	public ResponseEntity<PersonaNaturalEmpresa> updateEmpresa(@PathVariable(value = "id") Integer Id,
			@Valid @RequestBody PersonaNaturalEmpresa empresaDitails) throws ResourceNotFoundException {

		PersonaNaturalEmpresa empresa = empresaRepository.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("No se encontro el producto o servicio  :: " + Id));
		empresa.setNombre(empresaDitails.getNombre());
		empresa.setDireccion(empresaDitails.getDireccion());
		empresa.setRedesSociales(empresaDitails.getRedesSociales());
		empresa.setTelefonoContacto(empresaDitails.getTelefonoContacto());
		empresa.setVideoPitch(empresaDitails.getVideoPitch());
		final PersonaNaturalEmpresa updatedProducto =  empresaRepository.save(empresa);
		return ResponseEntity.ok(updatedProducto);
	}

	@DeleteMapping("/empresa/{id}")
	@ResponseBody
	public boolean deleteEmpresa(@PathVariable(value = "id") Integer Id) throws ResourceNotFoundException {
		boolean response = false;
		PersonaNaturalEmpresa deleteEmpresa = empresaRepository.findById(Id).orElseThrow(
				() -> new ResourceNotFoundException("No se encontro la empresa  o l;a persna natural a eliminar :: " + Id));
		empresaRepository.delete(deleteEmpresa);
		response = true;
		return response;
	}


}
