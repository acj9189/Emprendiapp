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

import com.EmprendiApp.Models.AsesorConsultor;
import com.EmprendiApp.Respositories.AsesorRepository;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/Asesores")
@RestController
@JsonIgnoreProperties(ignoreUnknown = true) 
public class AsesorConsultorController {
	
	@Autowired
	private AsesorRepository AsesorRepository;
	

	@GetMapping("/all")
	@ResponseBody
	private List<AsesorConsultor> getAllAsesoresCOnsultores(){
		return AsesorRepository.findAll();
	}
	
	@GetMapping("/asesor/{id}")
	@ResponseBody
	private Optional<AsesorConsultor> getAsesor(@PathVariable Integer id) {
		return AsesorRepository.findById(id);
	}

	@PostMapping("/asesor")
	@ResponseBody
	private AsesorConsultor nuevoAsesor(@Valid @RequestBody AsesorConsultor asesor) {
		return AsesorRepository.save(asesor);
	}

	@PutMapping("/asesor/{id}")
	@ResponseBody
	private ResponseEntity<AsesorConsultor> updateAsesor(@PathVariable(value = "id") Integer Id,
			@Valid @RequestBody AsesorConsultor asesor) throws ResourceNotFoundException {

		AsesorConsultor usuarioBuscado = AsesorRepository.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("No se encontro el Usuario  :: " + Id));
		usuarioBuscado.setAreasExperticia(asesor.getAreasExperticia());
		usuarioBuscado.setAreasInteres(asesor.getAreasInteres());
		usuarioBuscado.setConociminetoQAporta(asesor.getConociminetoQAporta());
		usuarioBuscado.setCostoHora(asesor.getCostoHora());
		usuarioBuscado.setTipoAsesorCOnsultor(asesor.isTipoAsesorCOnsultor());
		usuarioBuscado.setUsuario(asesor.getUsuario());
		final AsesorConsultor updateAsesor = AsesorRepository.save(usuarioBuscado);
		return ResponseEntity.ok(updateAsesor);
	}

	@DeleteMapping("/usuario/{id}")
	@ResponseBody
	private boolean deleteAsesor(@PathVariable(value = "id") Integer Id) throws ResourceNotFoundException {
		boolean response = false;
		AsesorConsultor deleteAsesor = AsesorRepository.findById(Id).orElseThrow(
				() -> new ResourceNotFoundException("No se encontro el Asesor o el consultar a eliminar :: " + Id));
		AsesorRepository.delete(deleteAsesor);
		response = true;
		return response;
		
	}

}
