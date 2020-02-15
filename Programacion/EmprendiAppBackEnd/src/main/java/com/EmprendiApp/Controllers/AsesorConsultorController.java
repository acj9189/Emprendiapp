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
	public List<AsesorConsultor> getAllAsesoresConsultores(){
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
	
	@PostMapping("/asesor/asesor/{id}/ver/{areas}")	
	@ResponseBody
	public AsesorConsultor getAsesorSegunAreas(@Valid @PathVariable Integer id, @Valid @PathVariable String areas){
		AsesorConsultor asesor = asesorRepository.findById(id).orElseThrow(() -> {
                    return null; //To change body of generated lambdas, choose Tools | Templates.
                });
		if(asesor.isTipoAsesorConsultor()) 
			return (asesor.getAreasExperticia().contains(areas))?asesor :null;
		return null;
	}
	
	@PostMapping("/asesor/asesor/{id}/ver/{horas}")	
	@ResponseBody
	public List<AsesorConsultor> getAsesorSegunCostoHora(@Valid @PathVariable Integer id, @Valid @PathVariable int horas){
		List<AsesorConsultor> asesoresT = asesorRepository.findAll();
		List<AsesorConsultor> asesoresBusqueda = new LinkedList<>();
		for(AsesorConsultor asesor: asesoresT ) {
			if((asesor.isTipoAsesorConsultor()) && (asesor.getCostoHora() == horas)) {
				asesoresBusqueda.add(asesor);
				return asesoresBusqueda;	
			}
		}
		return asesoresBusqueda;
	}
	
	@PostMapping("/asesor/asesor/{id}/ver/mayor/{horas}")	
	@ResponseBody
	public List<AsesorConsultor> getAsesorSegunCostoHoraMayor(@Valid @PathVariable Integer id, @Valid @PathVariable int horas){
		List<AsesorConsultor> asesoresT = asesorRepository.findAll();
		List<AsesorConsultor> asesoresBusqueda = new LinkedList<>();
		for(AsesorConsultor asesor: asesoresT ) {
			if((asesor.isTipoAsesorConsultor()) && (asesor.getCostoHora() > horas)) {
				asesoresBusqueda.add(asesor);
				return asesoresBusqueda;	
			}
		}
		return asesoresBusqueda;
	}
	
	@PostMapping("/asesor/asesor/{id}/ver/menor/{horas}")	
	@ResponseBody
	public List<AsesorConsultor> getAsesorSegunCostoHoraMenor(@Valid @PathVariable Integer id, @Valid @PathVariable int horas){
		List<AsesorConsultor> asesoresT = asesorRepository.findAll();
		List<AsesorConsultor> asesoresBusqueda = new LinkedList<>();
		for(AsesorConsultor asesor: asesoresT ) {
			if((asesor.isTipoAsesorConsultor()) && (asesor.getCostoHora() < horas)) {
				asesoresBusqueda.add(asesor);
				return asesoresBusqueda;	
			}
		}
		return asesoresBusqueda;
	}
	
	@PostMapping("/asesor/consultor/{id}/ver/{areas}")	
	@ResponseBody
	public AsesorConsultor getConsultorSegunAreas(@Valid @PathVariable Integer id, @Valid @PathVariable String areas){
		AsesorConsultor asesor = asesorRepository.findById(id).orElseThrow(() -> {
                    return null; //To change body of generated lambdas, choose Tools | Templates.
                });
		if(!asesor.isTipoAsesorConsultor()) 
			return (asesor.getAreasExperticia().contains(areas))?asesor :null;
		return null;
	}
	
	@PostMapping("/asesor/consultor/{id}/ver/{horas}")	
	@ResponseBody
	public List<AsesorConsultor> getConsultorrSegunCostoHora(@Valid @PathVariable Integer id, @Valid @PathVariable int horas){
		List<AsesorConsultor> consultoresT = asesorRepository.findAll();
		List<AsesorConsultor>consultoresBusqueda = new LinkedList<>();
		for(AsesorConsultor consultor: consultoresT ) {
			if((!consultor.isTipoAsesorConsultor()) && (consultor.getCostoHora() == horas)) {
				consultoresBusqueda.add(consultor);
				return consultoresBusqueda;	
			}
		}
		return consultoresBusqueda;
	}
	
	@PostMapping("/asesor/consultor/{id}/ver/mayor/{horas}")	
	@ResponseBody
	public List<AsesorConsultor> getConsultorrSegunCostoHoraMayor(@Valid @PathVariable Integer id, @Valid @PathVariable int horas){
		List<AsesorConsultor> consultoresT = asesorRepository.findAll();
		List<AsesorConsultor>consultoresBusqueda = new LinkedList<>();
		for(AsesorConsultor consultor: consultoresT ) {
			if((!consultor.isTipoAsesorConsultor()) && (consultor.getCostoHora() > horas)) {
				consultoresBusqueda.add(consultor);
				return consultoresBusqueda;	
			}
		}
		return consultoresBusqueda;
	}
	
	@PostMapping("/asesor/consultor/{id}/ver/menor/{horas}")	
	@ResponseBody
	public List<AsesorConsultor> getConsultorrSegunCostoHoraMenor(@Valid @PathVariable Integer id, @Valid @PathVariable int horas){
		List<AsesorConsultor> consultoresT = asesorRepository.findAll();
		List<AsesorConsultor>consultoresBusqueda = new LinkedList<>();
		for(AsesorConsultor consultor: consultoresT ) {
			if((!consultor.isTipoAsesorConsultor()) && (consultor.getCostoHora() < horas)) {
				consultoresBusqueda.add(consultor);
				return consultoresBusqueda;	
			}
		}
		return consultoresBusqueda;
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
	
	@PostMapping("/asesor/{id}")
	@ResponseBody
	public Optional<AsesorConsultor> getAsesor(@PathVariable Integer id) {
		return asesorRepository.findById(id);
	}

	@PostMapping("/asesor")
	@ResponseBody
	public AsesorConsultor nuevoAsesor(@Valid @RequestBody AsesorConsultor asesor) {
		return asesorRepository.save(asesor);
	}

	@PutMapping("/asesor/{id}")
	@ResponseBody
	public ResponseEntity<AsesorConsultor> updateAsesor(@PathVariable(value = "id") Integer Id,
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
	public boolean deleteAsesor(@PathVariable(value = "id") Integer Id) throws ResourceNotFoundException {
		boolean response = false;
		AsesorConsultor deleteAsesor = asesorRepository.findById(Id).orElseThrow(
				() -> new ResourceNotFoundException("No se encontro el Asesor o el consultar a eliminar :: " + Id));
		asesorRepository.delete(deleteAsesor);
		response = true;
		return response;
	}

}
