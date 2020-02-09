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

import com.EmprendiApp.Models.SocioInversor;
import com.EmprendiApp.Respositories.SocioInversorRepository;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/Socios")
@RestController
public class SocioInversorController {
	
	@Autowired
	private SocioInversorRepository socioRepository;
	
	//@CrossOrigin(origins = "http://localhost:4200")
		@GetMapping("/all")
		@ResponseBody
		public List<SocioInversor> getAllSociosInversores(){
			return socioRepository.findAll();
		}
		
		@GetMapping("/socio/socio/all")
		@ResponseBody
		public List<SocioInversor> getAllSocios(){
			List<SocioInversor> socios = new LinkedList<SocioInversor>();
			List<SocioInversor> sociosInversores = socioRepository.findAll();
			for(SocioInversor socio: sociosInversores ) {
				if(!socio.isTipoSocioInversor()) {
					socios.add(socio);
				}
			}
			return socios;	
		}
		
		@GetMapping("/socio/inversor/all")
		@ResponseBody
		public List<SocioInversor> getAllInversor(){
			List<SocioInversor> inversores = new LinkedList<SocioInversor>();
			List<SocioInversor> sociosInversores = socioRepository.findAll();
			for(SocioInversor inversor: sociosInversores ) {
				if(inversor.isTipoSocioInversor()) {
					inversores.add(inversor);
				}
			}
			return inversores;	
		}
		
		@GetMapping("/socio/{id}")
		@ResponseBody
		public Optional<SocioInversor> getSocio(@PathVariable Integer id) {
			return socioRepository.findById(id);
		}

		@PostMapping("/socio")
		@ResponseBody
		public SocioInversor NuevoSocio(@Valid @RequestBody SocioInversor socio) {
                    System.out.println(socio.getAreasExperticia());
                    System.out.println(socio.getUsuario().getNombres());
			return socioRepository.save(socio);
		}

		@PutMapping("/socio/{id}")
		@ResponseBody
		public ResponseEntity<SocioInversor> updateSocio(@PathVariable(value = "id") Integer Id,
				@Valid @RequestBody SocioInversor socio) throws ResourceNotFoundException {

			SocioInversor socioBuscado = socioRepository.findById(Id)
					.orElseThrow(() -> new ResourceNotFoundException("No se encontro el Usuario  :: " + Id));

			socioBuscado.setAreasExperticia(socio.getAreasExperticia());
			socioBuscado.setAreasInteres(socio.getAreasInteres());
			socioBuscado.setCantidadHorasDispuestoTrabajar(socio.getCantidadHorasDispuestoTrabajar());
			socioBuscado.setConociminetoQAporta(socio.getConociminetoQAporta());
			final SocioInversor  updatedSocio = socioRepository.save(socioBuscado);
			return ResponseEntity.ok(updatedSocio);
		}

		@DeleteMapping("/socio/{id}")
		@ResponseBody
		public boolean deleteUsuario(@PathVariable(value = "id") Integer Id) throws ResourceNotFoundException {
			boolean response = false;

			SocioInversor deleteSocio =socioRepository.findById(Id).orElseThrow(
					() -> new ResourceNotFoundException("No se encontro el Socio o inversosr a eliminar :: " + Id));
			socioRepository.delete(deleteSocio);
			response = true;
			return response;
		}
		
	

}
