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

import com.EmprendiApp.Models.PersonaNaturalEmpresa;
import com.EmprendiApp.Models.ProductoServicio;
import com.EmprendiApp.Respositories.PersonaNaturalEmpresaRepository;
import com.EmprendiApp.Respositories.ProductoServicioRepository;
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
	private List<PersonaNaturalEmpresa> getAllEmpresas() {
		return empresaRepository.findAll();

	}

	/*@GetMapping("/producto/{id}")
	@ResponseBody
	private Optional<ProductoServicio> getProducto(@PathVariable Integer id) {
		return productoServicioRepository.findById(id);

	}

	@PostMapping("/producto")
	@ResponseBody
	private ProductoServicio NuevoProducto(@Valid @RequestBody ProductoServicio producto) {
		return productoServicioRepository.save(producto);

	}

	@PutMapping("/producto/{id}")
	@ResponseBody
	private ResponseEntity<ProductoServicio> updateProducto(@PathVariable(value = "id") Integer Id,
			@Valid @RequestBody ProductoServicio productoDatails) throws ResourceNotFoundException {

		ProductoServicio producto = productoServicioRepository.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("No se encontro el producto o servicio  :: " + Id));

		producto.setNombre(productoDatails.getNombre());
		producto.setDescripcionProductoServicio(productoDatails.getDescripcionProblemaQSoluciona());
		producto.setCostoUnidad(productoDatails.getCostoUnidad());
		producto.setDescripcionProblemaQSoluciona(productoDatails.getDescripcionProblemaQSoluciona());

		final ProductoServicio updatedProducto = productoServicioRepository.save(producto);
		return ResponseEntity.ok(updatedProducto);

	}

	@DeleteMapping("/producto/{id}")
	@ResponseBody
	private boolean deleteProducto(@PathVariable(value = "id") Integer Id) throws ResourceNotFoundException {
		boolean response = false;

		ProductoServicio deleteProduct = productoServicioRepository.findById(Id).orElseThrow(
				() -> new ResourceNotFoundException("No se encontro el producto o servicio a eliminar :: " + Id));
		productoServicioRepository.delete(deleteProduct);
		response = true;
		return response;
	}*/


}
