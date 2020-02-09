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
import com.EmprendiApp.Models.Convocatoria;
import com.EmprendiApp.Respositories.ConvocatoriaRepository;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/Convocatorias")
@RestController
@JsonIgnoreProperties(ignoreUnknown = true) 
public class ConvocatoriaController {
	
	@Autowired
	private ConvocatoriaRepository convocatoriaRepository;
	

	@GetMapping("/all")
	@ResponseBody
	private List<Convocatoria> getAllConvocatoria(){
		
		return convocatoriaRepository.findAll();
	}
	
	@GetMapping("/Convocatoria/{id}")
	@ResponseBody
	private Optional<Convocatoria> getConvocatoria(@PathVariable Integer id) {
		return convocatoriaRepository.findById(id);
	}

	@PostMapping("/Convocatoria")
	@ResponseBody
	private Convocatoria nuevoAsesor(@Valid @RequestBody Convocatoria convocatoria) {
		return convocatoriaRepository.save(convocatoria);
	}

	@PutMapping("/Convocatoria/{id}")
	@ResponseBody
	private ResponseEntity<Convocatoria> updateConvocatoria(@PathVariable(value = "id") Integer Id,
			@Valid @RequestBody Convocatoria convocatoria) throws ResourceNotFoundException {

		Convocatoria convocatoriaBuscada = convocatoriaRepository.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("No se encontro el Usuario  :: " + Id));
		convocatoriaBuscada.setDescripcionConvocatoria(convocatoria.getDescripcionConvocatoria());
		convocatoriaBuscada.setFechaInicio(convocatoria.getFechaInicio());
		convocatoriaBuscada.setFechaTerminacion(convocatoria.getFechaTerminacion());
		convocatoriaBuscada.setFormaContacto(convocatoria.getFormaContacto());
		convocatoriaBuscada.setNombreConvocatoria(convocatoria.getNombreConvocatoria());
		convocatoriaBuscada.setRedessociales(convocatoria.getRedessociales());
		convocatoriaBuscada.setTipoConvocatoria(convocatoria.getTipoConvocatoria());
		final Convocatoria updateConvocatoria = convocatoriaRepository.save(convocatoriaBuscada);
		return ResponseEntity.ok(updateConvocatoria);
	}

	@DeleteMapping("/Convocatoria/{id}")
	@ResponseBody
	private boolean deletConvocatoria(@PathVariable(value = "id") Integer Id) throws ResourceNotFoundException {
		boolean response = false;
		Convocatoria deleteAsesor = convocatoriaRepository.findById(Id).orElseThrow(
				() -> new ResourceNotFoundException("No se encontro el Asesor o el consultar a eliminar :: " + Id));
		convocatoriaRepository.delete(deleteAsesor);
		response = true;
		return response;
		
	}

}
