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
import com.EmprendiApp.Models.Usuario;
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
	
	@PostMapping("/asesor/asesor/ver/areas")	
	@ResponseBody
	public AsesorConsultor getAsesorSegunAreas(@Valid @RequestBody Integer id, @Valid @RequestBody String areas){
		AsesorConsultor asesor = asesorRepository.findById(id).orElseThrow(null);
		if(asesor.isTipoAsesorConsultor()) 
			return (asesor.getAreasExperticia().contains(areas))?asesor :null;
		return null;
	}
	
	@PostMapping("/asesor/asesor/ver/horas")	
	@ResponseBody
	public List<AsesorConsultor> getAsesorSegunCostoHora(@Valid @RequestBody int horas){
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
	
	@PostMapping("/asesor/asesor/ver/hora/mayor")	
	@ResponseBody
	public List<AsesorConsultor> getAsesorSegunCostoHoraMayor(@Valid @RequestBody int horas){
		List<AsesorConsultor> asesoresT = asesorRepository.findAll();
		List<AsesorConsultor> asesoresBusqueda = new LinkedList<>();
		for(AsesorConsultor asesor: asesoresT ) {
			if((asesor.isTipoAsesorConsultor()) && (asesor.getCostoHora() > horas)) {
				asesoresBusqueda.add(asesor);
			}
		}
		return asesoresBusqueda;
	}
	
	@PostMapping("/asesor/asesor/ver/hora/menor/")	
	@ResponseBody
	public List<AsesorConsultor> getAsesorSegunCostoHoraMenor(@Valid @RequestBody int horas){
		List<AsesorConsultor> asesoresT = asesorRepository.findAll();
		List<AsesorConsultor> asesoresBusqueda = new LinkedList<>();
		for(AsesorConsultor asesor: asesoresT ) {
			if((asesor.isTipoAsesorConsultor()) && (asesor.getCostoHora() < horas)) {
				asesoresBusqueda.add(asesor);
			}
		}
		return asesoresBusqueda;
	}
	
	@PostMapping("/asesor/consultor/ver/areas/")	
	@ResponseBody
	public AsesorConsultor getConsultorSegunAreas(@Valid @RequestBody Integer id, @Valid @PathVariable String areas){
		AsesorConsultor asesor = asesorRepository.findById(id).orElseThrow(null);
		if(!asesor.isTipoAsesorConsultor()) 
			return (asesor.getAreasExperticia().contains(areas))?asesor :null;
		return null;
	}
	
	@PostMapping("/asesor/consultor/ver/hora")	
	@ResponseBody
	public List<AsesorConsultor> getConsultorrSegunCostoHora(@Valid @RequestBody int id, @Valid @RequestBody int horas){
		List<AsesorConsultor> consultoresT = asesorRepository.findAll();
		List<AsesorConsultor>consultoresBusqueda = new LinkedList<>();
		for(AsesorConsultor consultor: consultoresT ) {
			if((!consultor.isTipoAsesorConsultor()) && (consultor.getCostoHora() == horas)) {
				consultoresBusqueda.add(consultor);
			}
		}
		return consultoresBusqueda;
	}
	
	@PostMapping("/asesor/consultor/ver/mayor")	
	@ResponseBody
	public List<AsesorConsultor> getConsultorSegunCostoHoraMayor(@Valid @RequestBody int id, @Valid @RequestBody int horas){
		List<AsesorConsultor> consultoresT = asesorRepository.findAll();
		List<AsesorConsultor>consultoresBusqueda = new LinkedList<>();
		for(AsesorConsultor consultor: consultoresT ) {
			if((!consultor.isTipoAsesorConsultor()) && (consultor.getCostoHora() > horas)) {
				consultoresBusqueda.add(consultor);
			}
		}
		return consultoresBusqueda;
	}
	
	@PostMapping("/asesor/consultor/ver/menor")	
	@ResponseBody
	public List<AsesorConsultor> getConsultorSegunCostoHoraMenor(@Valid @RequestBody int id, @Valid @RequestBody int horas){
		List<AsesorConsultor> consultoresT = asesorRepository.findAll();
		List<AsesorConsultor>consultoresBusqueda = new LinkedList<>();
		for(AsesorConsultor consultor: consultoresT ) {
			if((!consultor.isTipoAsesorConsultor()) && (consultor.getCostoHora() < horas)) {
				consultoresBusqueda.add(consultor);
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
	public Optional<AsesorConsultor> getAsesor(Integer id) {
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

	@DeleteMapping("/asesor/{id}")
	@ResponseBody
	public boolean deleteAsesor(@PathVariable(value = "id") @RequestBody Integer Id) throws ResourceNotFoundException {
		boolean response = false;
		AsesorConsultor deleteAsesor = asesorRepository.findById(Id).orElseThrow(
				() -> new ResourceNotFoundException("No se encontro el Asesor o el consultar a eliminar :: " + Id));
		asesorRepository.delete(deleteAsesor);
		response = true;
		return response;
	}
	
	@PostMapping("/asesor/asesor/buscar/nombre")
	@ResponseBody
	public List<AsesorConsultor> getAsesorNombre(@Valid @RequestBody String nombre){
		List<AsesorConsultor> asesor = asesorRepository.findAll();
		List<AsesorConsultor> asesoresBuscados = new LinkedList<>();
		for(AsesorConsultor usuario: asesor ) {
			if(usuario.isTipoAsesorConsultor()) {
				if(usuario.getUsuario().getNombres().contains(nombre)) {
					asesoresBuscados.add(usuario);
				}
			}
		}
		return asesoresBuscados;
	}
	
	@PostMapping("/asesor/asesor/buscar/apellido")
	@ResponseBody
	public List<AsesorConsultor> getAsesorApellido(@Valid @RequestBody String apellido){
		List<AsesorConsultor> asesor = asesorRepository.findAll();
		List<AsesorConsultor> asesoresBuscados = new LinkedList<>();
		for(AsesorConsultor usuario: asesor ) {
			if(usuario.isTipoAsesorConsultor()) {
				if(usuario.getUsuario().getApellidos().contains(apellido)) {
					asesoresBuscados.add(usuario);
				}
			}
		}
		return asesoresBuscados;
	}
	
	@PostMapping("/asesor/asesor/buscar/direccion")
	@ResponseBody
	public List<AsesorConsultor> getAsesorDireccion(@Valid @RequestBody String direccion){
		List<AsesorConsultor> asesoresT = asesorRepository.findAll();
		List<AsesorConsultor> asesoresBuscados = new LinkedList<>();
		for(AsesorConsultor asesor: asesoresT ) {
			if(asesor.isTipoAsesorConsultor()) {
				if(asesor.getUsuario().getDireccionContacto().contains(direccion)) {
					asesoresBuscados.add(asesor);
				}
			}
		}
		return asesoresBuscados;
	}
	
	@PostMapping("/asesor/consultor/buscar/nombre")
	@ResponseBody
	public List<AsesorConsultor> getConsultorNombre(@Valid @RequestBody String nombre){
		List<AsesorConsultor> consultor = asesorRepository.findAll();
		List<AsesorConsultor> consultoresBuscados = new LinkedList<>();
		for(AsesorConsultor usuario: consultor ) {
			if(!usuario.isTipoAsesorConsultor()) {
				if(usuario.getUsuario().getNombres().contains(nombre)) {
					consultoresBuscados.add(usuario);
				}
			}
		}
		return consultoresBuscados;
	}
	
	@PostMapping("/asesor/consultor/buscar/direccion")
	@ResponseBody
	public List<AsesorConsultor> getConsultorDireccion(@Valid @RequestBody String direccion){
		List<AsesorConsultor> consultorT = asesorRepository.findAll();
		List<AsesorConsultor> consultoresBuscados = new LinkedList<>();
		for(AsesorConsultor consultor: consultorT ) {
			if(!consultor.isTipoAsesorConsultor()) {
				if(consultor.getUsuario().getDireccionContacto().contains(direccion)) {
					consultoresBuscados.add(consultor);
				}
			}
		}
		return consultoresBuscados;
	}
	
	@PostMapping("/asesor/consultor/buscar/apellido")
	@ResponseBody
	public List<AsesorConsultor> getConsultorApellido(@Valid @RequestBody String apellido){
		List<AsesorConsultor> asesor = asesorRepository.findAll();
		List<AsesorConsultor> asesoresBuscados = new LinkedList<>();
		for(AsesorConsultor usuario: asesor ) {
			if(!usuario.isTipoAsesorConsultor()) {
				if(usuario.getUsuario().getApellidos().contains(apellido)) {
					asesoresBuscados.add(usuario);
				}
			}
		}
		return asesoresBuscados;
	}
	
	

}
