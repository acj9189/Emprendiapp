package com.EmprendiApp.Controllers;

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
import com.EmprendiApp.Models.Notificacion;
import com.EmprendiApp.Respositories.NotificacionRepository;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/Notificaciones")
@RestController
@JsonIgnoreProperties(ignoreUnknown = true) 
public class NotificacionController {
	
	@Autowired
	private NotificacionRepository NotificacionRepository;
	
	@GetMapping("/notificacion/{id}")
	@ResponseBody
	private Optional<Notificacion> getNotificacion(@PathVariable Integer id) {
		return NotificacionRepository.findById(id);
	}

	@PostMapping("/notificacion")
	@ResponseBody
	private Notificacion nuevaNotificacion(@Valid @RequestBody Notificacion notificacion) {
		return NotificacionRepository.save(notificacion);
	}

	@PutMapping("/notificacion/{id}")
	@ResponseBody
	private ResponseEntity<Notificacion> updateNotifiacion(@PathVariable(value = "id") Integer Id,
			@Valid @RequestBody Notificacion notificacion) throws ResourceNotFoundException {

		Notificacion notificacionBuscada = NotificacionRepository.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("No se encontro el Usuario  :: " + Id));
		notificacionBuscada.setTitulo(notificacion.getTitulo());
		notificacionBuscada.setDescripcion(notificacion.getDescripcion());
		notificacionBuscada.setFechaNotificacion(notificacion.getFechaNotificacion());
		notificacionBuscada.setTipo(notificacion.getTipo());
		final Notificacion updatedNotificacion = NotificacionRepository.save(notificacionBuscada);
		return ResponseEntity.ok(updatedNotificacion);
	}

	@DeleteMapping("/notificacion/{id}")
	@ResponseBody
	private boolean deleteNotificacion(@PathVariable(value = "id") Integer Id) throws ResourceNotFoundException {
		boolean response = false;

		Notificacion deleteNotificacion = NotificacionRepository.findById(Id).orElseThrow(
				() -> new ResourceNotFoundException("No se encontro la Notifiacion a eliminar: " + Id));
		NotificacionRepository.delete(deleteNotificacion);
		response = true;
		return response;
	}
	

}
