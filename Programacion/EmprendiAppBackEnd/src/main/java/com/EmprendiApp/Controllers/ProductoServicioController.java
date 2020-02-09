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

import com.EmprendiApp.Models.*;
import com.EmprendiApp.Respositories.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/productos")
@RestController
@JsonIgnoreProperties(ignoreUnknown = true) 
public class ProductoServicioController {

	@Autowired
	private ProductoServicioRepository productoServicioRepository;

	@GetMapping("/all")
	@ResponseBody
	public List<ProductoServicio> getAllProductos() {
		return productoServicioRepository.findAll();

	}
	
	@GetMapping("/producto/producto/all")
	@ResponseBody
	public List<ProductoServicio> getAllAsesores(){
		List<ProductoServicio> productos = new LinkedList<>();
		List<ProductoServicio> productosServicios = productoServicioRepository.findAll();
		for(ProductoServicio producto: productosServicios ) {
			if(producto.isTipoProductoServicio()) {
				productos.add(producto);
			}
		}
		return productos;	
	}
	
	@GetMapping("/producto/servicio/all")
	@ResponseBody
	public List<ProductoServicio> getAllConsultores(){
		List<ProductoServicio> servicios = new LinkedList<>();
		List<ProductoServicio> productosServicios = productoServicioRepository.findAll();
		for(ProductoServicio servicio: productosServicios ) {
			if(!servicio.isTipoProductoServicio()) {
				servicios.add(servicio);
			}
		}
		return servicios;	
		
	}

	@GetMapping("/producto/{id}")
	@ResponseBody
	private Optional<ProductoServicio> getProducto(@PathVariable Integer id) {
		return productoServicioRepository.findById(id);

	}

	@PostMapping("/producto")
	@ResponseBody
	public ProductoServicio NuevoProducto(@Valid @RequestBody ProductoServicio producto) {
		return productoServicioRepository.save(producto);

	}

	@PutMapping("/producto/{id}")
	@ResponseBody
	public ResponseEntity<ProductoServicio> updateProducto(@PathVariable(value = "id") Integer Id,
			@Valid @RequestBody ProductoServicio productoDitails) throws ResourceNotFoundException {

		ProductoServicio producto = productoServicioRepository.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("No se encontro el producto o servicio  :: " + Id));

		producto.setNombre(productoDitails.getNombre());
		producto.setDescripcionProductoServicio(productoDitails.getDescripcionProblemaQSoluciona());
		producto.setCostoUnidad(productoDitails.getCostoUnidad());
		producto.setDescripcionProblemaQSoluciona(productoDitails.getDescripcionProblemaQSoluciona());

		final ProductoServicio updatedProducto = productoServicioRepository.save(producto);
		return ResponseEntity.ok(updatedProducto);

	}

	@DeleteMapping("/producto/{id}")
	@ResponseBody
	public boolean deleteProducto(@PathVariable(value = "id") Integer Id) throws ResourceNotFoundException {
		boolean response = false;

		ProductoServicio deleteProduct = productoServicioRepository.findById(Id).orElseThrow(
				() -> new ResourceNotFoundException("No se encontro el producto o servicio a eliminar :: " + Id));
		productoServicioRepository.delete(deleteProduct);
		response = true;
		return response;
	}

}
