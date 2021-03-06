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
import com.EmprendiApp.Models.ProductoServicio;
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
	
	@PostMapping("/empresa/personaNarural/ver/nombre/{nombre}")	
	@ResponseBody
	public List<PersonaNaturalEmpresa> getPersonaNaturaLNombre(@Valid @PathVariable String nombre){
		List<PersonaNaturalEmpresa> personaNaturalT = empresaRepository.findAll();
		List<PersonaNaturalEmpresa> personaNaturalBuscada = new LinkedList<>();
		for(PersonaNaturalEmpresa persona: personaNaturalT ) {
			if((persona.isTipo()) && (persona.getNombre().contains(nombre))) {
				personaNaturalBuscada.add(persona);
			}
		}
		return personaNaturalBuscada;
	}
	
	@PostMapping("/empresa/empresa/ver/nombre")	
	@ResponseBody
	public List<PersonaNaturalEmpresa> getEmpresaLNombre(@Valid @RequestBody String nombre){
		List<PersonaNaturalEmpresa> personaNaturalT = empresaRepository.findAll();
		List<PersonaNaturalEmpresa> personaNaturalBuscada = new LinkedList<>();
		for(PersonaNaturalEmpresa persona: personaNaturalT ) {
			if((!persona.isTipo()) && (persona.getNombre().contains(nombre))) {
				personaNaturalBuscada.add(persona);
			}
		}
		return personaNaturalBuscada;
	}
	
	@PostMapping("/empresa/empresa/ver/direccion")	
	@ResponseBody
	public List<PersonaNaturalEmpresa> getEmpresaDireccion(@Valid @RequestBody String direccion){
		List<PersonaNaturalEmpresa> personaNaturalT = empresaRepository.findAll();
		List<PersonaNaturalEmpresa> personaNaturalBuscada = new LinkedList<>();
		for(PersonaNaturalEmpresa persona: personaNaturalT ) {
			if((persona.isTipo()) && (persona.getDireccion().contentEquals(direccion))) {
				personaNaturalBuscada.add(persona);
			}
		}
		return personaNaturalBuscada;
	}
	
	@PostMapping("/empresa/personaNarural/ver/direccion")	
	@ResponseBody
	public List<PersonaNaturalEmpresa> getpersonaNaruralDireccion(@Valid @RequestBody String direccion){
		List<PersonaNaturalEmpresa> personaNaturalT = empresaRepository.findAll();
		List<PersonaNaturalEmpresa> personaNaturalBuscada = new LinkedList<>();
		for(PersonaNaturalEmpresa persona: personaNaturalT ) {
			if((!persona.isTipo()) && (persona.getDireccion().contentEquals(direccion))) {
				personaNaturalBuscada.add(persona);
			}
		}
		return personaNaturalBuscada;
	}
	
	@PostMapping("/empresa/personaNarural/ver/nombre/producto")	
	@ResponseBody
	public List<PersonaNaturalEmpresa> getpersonaNaruralProducto(@Valid @RequestBody String producto){
		List<PersonaNaturalEmpresa> personaNaturalT = empresaRepository.findAll();
		List<PersonaNaturalEmpresa> personaNaturalBuscada = new LinkedList<>();
		for(PersonaNaturalEmpresa persona: personaNaturalT ) {
			if(!persona.isTipo()) {
				for(ProductoServicio productos: persona.getProductos()) {
					if(productos.getNombre().contains(producto)) {
						personaNaturalBuscada.add(persona);
					}
				}
			}
		}
		return personaNaturalBuscada;
	}
	
	@PostMapping("/empresa/empresa/ver/nombre/producto")	
	@ResponseBody
	public List<PersonaNaturalEmpresa> getEmpresaProducto(@Valid @RequestBody String producto){
		List<PersonaNaturalEmpresa> personaNaturalT = empresaRepository.findAll();
		List<PersonaNaturalEmpresa> personaNaturalBuscada = new LinkedList<>();
		for(PersonaNaturalEmpresa persona: personaNaturalT ) {
			if(persona.isTipo()) {
				for(ProductoServicio productos: persona.getProductos()) {
					if(productos.getNombre().contains(producto)) {
						personaNaturalBuscada.add(persona);
					}
				}
			}
		}
		return personaNaturalBuscada;
	}
	
	@PostMapping("/empresa/empresa/ver/redes")	
	@ResponseBody
	public List<PersonaNaturalEmpresa> getEmpresaRedesSocialers(@Valid @RequestBody String redes){
		List<PersonaNaturalEmpresa> EmpresaST = empresaRepository.findAll();
		List<PersonaNaturalEmpresa> EmpresasBuscadas = new LinkedList<>();
		for(PersonaNaturalEmpresa empresa: EmpresaST ) {
			if(empresa.isTipo()) {
				if(empresa.getRedesSociales().contains("redes")) {
					EmpresasBuscadas.add(empresa);
					
					}
				}
			}
		return EmpresasBuscadas;
	}
	
	@PostMapping("/empresa/personaNarural/ver/redes")	
	@ResponseBody
	public List<PersonaNaturalEmpresa> getPersonaNaturalRedesSocialers(@Valid @RequestBody String redes){
		List<PersonaNaturalEmpresa> personaNatural = empresaRepository.findAll();
		List<PersonaNaturalEmpresa> personaNaturlaBuscada = new LinkedList<>();
		for(PersonaNaturalEmpresa persona: personaNatural ) {
			if(!persona.isTipo()) {
				if(persona.getRedesSociales().contains("redes")) {
					personaNaturlaBuscada.add(persona);
					
					}
				}
			}
		return personaNaturlaBuscada;
	}
	
}
