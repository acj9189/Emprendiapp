package com.EmprendiApp.Controllers;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.EmprendiApp.Models.Llamada;
import com.EmprendiApp.Respositories.LlamadaRepository;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/Llamadas")
@RestController
@JsonIgnoreProperties(ignoreUnknown = true) 
public class LlamadaController {
	
	@Autowired
	private LlamadaRepository llamadaRepository;
	

	@GetMapping("/all")
	@ResponseBody
	public List<Llamada> getAllLlamadas(){
		return llamadaRepository.findAll();
	}
	
	@GetMapping("/Llamada/{id}")
	@ResponseBody
	public Optional<Llamada> getLlamada(@PathVariable Integer id) {
		return llamadaRepository.findById(id);
	}

	@PostMapping("/Llamada")
	@ResponseBody
	public Llamada nuevaLlamada(@Valid @RequestBody Llamada llamada) {
		return llamadaRepository.save(llamada);
	}
	
	@DeleteMapping("/Llamada/{id}")
	@ResponseBody
	public boolean deleteLlamada(@PathVariable(value = "id") Integer Id) throws ResourceNotFoundException {
		boolean response = false;
		Llamada deleteLlamada = llamadaRepository.findById(Id).orElseThrow(
				() -> new ResourceNotFoundException("No se encontro el mensaje a eliminar :: " + Id));
		llamadaRepository.delete(deleteLlamada);
		response = true;
		return response;
	}

}
