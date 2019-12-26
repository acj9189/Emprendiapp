package Controllers;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import Models.ProductoServicio;
import Respositories.ProductoRepository;

@RestController
@RequestMapping("/")
@Component
public class ProductoServicioController {

	@Autowired
	private ProductoRepository prodductoRepository;

	@GetMapping("/productos")
	@ResponseBody
	private List<ProductoServicio> getAllProductos() {
		return prodductoRepository.findAll();

	}

	@GetMapping("/producto/{id}")
	@ResponseBody
	private Optional<ProductoServicio> getProducto(@PathVariable Integer id) {
		return prodductoRepository.findById(id);

	}

	@PostMapping("/producto")
	@ResponseBody
	private ProductoServicio NuevoProducto(@Valid @RequestBody ProductoServicio producto) {
		return prodductoRepository.save(producto);

	}

	@PutMapping("/producto/{id}")
	@ResponseBody
	private ResponseEntity<ProductoServicio> updateProducto(@PathVariable(value = "id") Integer Id,
			@Valid @RequestBody ProductoServicio productoDatails) throws ResourceNotFoundException {

		ProductoServicio producto = prodductoRepository.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("No se encontro el producto o servicio  :: " + Id));

		producto.setNombre(productoDatails.getNombre());
		producto.setDescripcionProductoServicio(productoDatails.getDescripcionProblemaQSoluciona());
		producto.setCostoUnidad(productoDatails.getCostoUnidad());
		producto.setDescripcionProblemaQSoluciona(productoDatails.getDescripcionProblemaQSoluciona());

		final ProductoServicio updatedProducto = prodductoRepository.save(producto);
		return ResponseEntity.ok(updatedProducto);

	}

	@DeleteMapping("/producto/{id}")
	@ResponseBody
	private boolean deleteProducto(@PathVariable(value = "id") Integer Id) throws ResourceNotFoundException {
		boolean response = false;

		ProductoServicio deleteProduct = prodductoRepository.findById(Id).orElseThrow(
				() -> new ResourceNotFoundException("No se encontro el producto o servicio a eliminar :: " + Id));
		prodductoRepository.delete(deleteProduct);
		response = true;
		return response;
	}

}
