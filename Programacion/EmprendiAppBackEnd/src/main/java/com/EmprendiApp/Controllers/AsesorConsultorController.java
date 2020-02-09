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

import com.EmprendiApp.Models.AsesorConsultor;
import com.EmprendiApp.Models.PersonaNaturalEmpresa;
import com.EmprendiApp.Respositories.AsesorRepository;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/Asesores")
@RestController
@JsonIgnoreProperties(ignoreUnknown = true) 
public class AsesorConsultorController {
	
	@Autowired
	private AsesorRepository asesorRepository;
	

	@GetMapping("/all")
	@ResponseBody
	private List<AsesorConsultor> getAllAsesoresConsultores(){
		return asesorRepository.findAll();
	}
	
	@GetMapping("/asesor/asesor/all")
	@ResponseBody
	public List<AsesorConsultor> getAllAsesores(){
		List<AsesorConsultor> asesores = new LinkedList<>();
		List<AsesorConsultor> asesoresConsultores = asesorRepository.findAll();
		for(AsesorConsultor persoNatural: asesoresConsultores ) {
			if(persoNatural.isTipoAsesorConsultor()) {
				asesores.add(persoNatural);
			}
		}
		return asesores;	
	}
	
	@GetMapping("/asesor/consultor/all")
	@ResponseBody
	public List<AsesorConsultor> getAllConsultores(){
		List<AsesorConsultor> consultores = new LinkedList<>();
		List<AsesorConsultor> asesoresConsultores = asesorRepository.findAll();
		for(AsesorConsultor consultor: asesoresConsultores ) {
			if(!consultor.isTipoAsesorConsultor()) {
				consultores.add(consultor);
			}
		}
		return consultores;	
	}
	
	@GetMapping("/asesor/{id}")
	@ResponseBody
	private Optional<AsesorConsultor> getAsesor(@PathVariable Integer id) {
		return asesorRepository.findById(id);
	}

	@PostMapping("/asesor")
	@ResponseBody
	private AsesorConsultor nuevoAsesor(@Valid @RequestBody AsesorConsultor asesor) {
		return asesorRepository.save(asesor);
	}

	@PutMapping("/asesor/{id}")
	@ResponseBody
	private ResponseEntity<AsesorConsultor> updateAsesor(@PathVariable(value = "id") Integer Id,
			@Valid @RequestBody AsesorConsultor asesor) throws ResourceNotFoundException {

		AsesorConsultor usuarioBuscado = asesorRepository.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("No se encontro el Usuario  :: " + Id));
		usuarioBuscado.setAreasExperticia(asesor.getAreasExperticia());
		usuarioBuscado.setAreasInteres(asesor.getAreasInteres());
		usuarioBuscado.setConociminetoQAporta(asesor.getConociminetoQAporta());
		usuarioBuscado.setCostoHora(asesor.getCostoHora());
		usuarioBuscado.setTipoAsesorConsultor(asesor.isTipoAsesorConsultor());
		usuarioBuscado.setUsuario(asesor.getUsuario());
		final AsesorConsultor updateAsesor = asesorRepository.save(usuarioBuscado);
		return ResponseEntity.ok(updateAsesor);
	}

	@DeleteMapping("/usuario/{id}")
	@ResponseBody
	private boolean deleteAsesor(@PathVariable(value = "id") Integer Id) throws ResourceNotFoundException {
		boolean response = false;
		AsesorConsultor deleteAsesor = asesorRepository.findById(Id).orElseThrow(
				() -> new ResourceNotFoundException("No se encontro el Asesor o el consultar a eliminar :: " + Id));
		asesorRepository.delete(deleteAsesor);
		response = true;
		return response;
		
	}

}
