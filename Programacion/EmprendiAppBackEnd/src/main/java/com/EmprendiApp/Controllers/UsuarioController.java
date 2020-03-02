package com.EmprendiApp.Controllers;


import java.util.Date;
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
import com.EmprendiApp.Models.Mensaje;
import com.EmprendiApp.Models.SocioInversor;
import com.EmprendiApp.Models.Usuario;
import com.EmprendiApp.Respositories.AsesorRepository;
import com.EmprendiApp.Respositories.UsuarioRepository;
import com.EmprendiApp.Services.EnvioEmail;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/usuarios")
@RestController
@JsonIgnoreProperties(ignoreUnknown = true) 
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository userRepository;
	
	@Autowired
	private EnvioEmail servicesEmail;
	
	@GetMapping("/all")
	@ResponseBody
	public List<Usuario> getAllUsuarios(){
		return userRepository.findAll();
	}
	
	@GetMapping("/usuario/{id}")
	@ResponseBody
	public Optional<Usuario> getUsuario(@PathVariable Integer id) {
		return userRepository.findById(id);
	}

	@PostMapping("/usuario")
	@ResponseBody
	public Usuario nuevoUsuario(@Valid @RequestBody Usuario ususario) {
		return userRepository.save(ususario);
	}

	@PutMapping("/usuario/{id}")
	@ResponseBody
	public ResponseEntity<Usuario> updateUsuario(@PathVariable(value = "id") Integer Id,
			@Valid @RequestBody Usuario usuario) throws ResourceNotFoundException {

		Usuario usuarioBuscado = userRepository.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("No se encontro el Usuario  :: " + Id));
		usuarioBuscado.setNombres(usuario.getNombres());
		usuarioBuscado.setApellidos(usuario.getApellidos());
		usuarioBuscado.setDescripcionIntereses(usuario.getDescripcionIntereses());
		usuarioBuscado.setDireccionContacto(usuario.getDireccionContacto());
		usuarioBuscado.setEmail(usuario.getEmail());
		usuarioBuscado.setTelefono(usuario.getTelefono());
		final Usuario updatedUsuario = userRepository.save(usuarioBuscado);
		return ResponseEntity.ok(updatedUsuario);
	}

	@DeleteMapping("/usuario/{id}")
	@ResponseBody
	public boolean deleteUsuario(@PathVariable(value = "id") Integer Id) throws ResourceNotFoundException {
		boolean response = false;
		Usuario deleteUsuario = userRepository.findById(Id).orElseThrow(
				() -> new ResourceNotFoundException("No se encontro el usuario a eliminar :: " + Id));
		userRepository.delete(deleteUsuario);
		response = true;
		return response;
	}
	
	@PostMapping("/usuario/enviar/Mensaje")
	@ResponseBody
	public boolean enviarMensaje(@Valid @RequestBody Mensaje mensaje) {
		//Falta enviar al correo
        System.out.println(mensaje.getContenido());
		boolean response = false;
	
		Usuario usuario = userRepository.findById(mensaje.getId_emisor()).orElseThrow(() -> {
                    return null;
                });
        System.out.println(mensaje);
                                
        if(usuario != null){
        	if(usuario.getMensajesRealizados() != null) {
			    return servicesEmail.sendEmail(mensaje.getCorreoDestino(), mensaje.getAsunto(), mensaje.getContenido());
					
			}
			else {
					 System.out.println(mensaje);
					 return servicesEmail.sendEmail(mensaje.getCorreoDestino(), mensaje.getAsunto(), mensaje.getContenido());
			}
        }
        else{
        	return response;
        }
	}
	
	@PostMapping("/usuario/ver/Mensajes/")
	@ResponseBody
	public List<Mensaje> getAllMensajes(@Valid @RequestBody Integer id){
		Usuario usuario = userRepository.findById(id).orElseThrow(() -> {
                    return null; 
                });
		return usuario.getMensajesRealizados();
	}
	
	@PostMapping("usuario/ver/Mensaje/contenido")
	@ResponseBody
	public List<Mensaje> getMensajeEspecifico(@Valid @RequestBody Integer id, @Valid @RequestBody String contenido){
		Usuario usuario = userRepository.findById(id).orElseThrow(null);
		List<Mensaje> listMensajeContenido = usuario.getMensajesRealizados();
		List<Mensaje> listMensajeContenidoBuscado = new LinkedList<>();     
		for(Mensaje mensaje : listMensajeContenido){
			if (mensaje.getContenido().contains(contenido)){
				listMensajeContenidoBuscado.add(mensaje);
			}
		}
		return listMensajeContenidoBuscado;
	}
	
	@PostMapping("usuario/ver/Mensaje/destinatario")
	@ResponseBody
	public List<Mensaje> getMensajeEspecificoDestinatario(@Valid @RequestBody Integer id, @Valid @RequestBody String destinatario){
		Usuario usuario = userRepository.findById(id).orElseThrow(null);
		List<Mensaje> listMensajeContenido = usuario.getMensajesRealizados();
		List<Mensaje> listMensajeContenidoBuscado = new LinkedList<>();
		for(Mensaje mensaje : listMensajeContenido){
			if (mensaje.getCorreoDestino().contentEquals(destinatario)){
				listMensajeContenidoBuscado.add(mensaje);
			}
		}
		return listMensajeContenidoBuscado;
	}
	
	@PostMapping("usuario/ver/Mensaje/fecha")
	@ResponseBody
	public List<Mensaje> getMensajeEspecificoFecha(@Valid @RequestBody Integer id, @Valid @RequestBody String fechas){
		Usuario usuario = userRepository.findById(id).orElseThrow(null);
		List<Mensaje> listMensajeContenido = usuario.getMensajesRealizados();
		List<Mensaje> listMensajeContenidoBuscado = new LinkedList<>();
		for(Mensaje mensaje : listMensajeContenido){
			Date fecha = new Date(fechas);
			if (mensaje.getFechaRealizadoMensaje().equals(fecha)){
				listMensajeContenidoBuscado.add(mensaje);
			}
		}
		return listMensajeContenidoBuscado;
	}
	
	@PostMapping("usuario/ver/Mensaje/asunto")
	@ResponseBody
	public List<Mensaje> getMensajeEspecificoAsunto(@Valid @RequestBody Integer id, @Valid @RequestBody String asunto){
		Usuario usuario = userRepository.findById(id).orElseThrow(null);
		List<Mensaje> listMensajeContenido = usuario.getMensajesRealizados();
		List<Mensaje> listMensajeContenidoBuscado = new LinkedList<>();
		for(Mensaje mensaje : listMensajeContenido){
			if (mensaje.getAsunto().contains(asunto)){
				listMensajeContenidoBuscado.add(mensaje);
			}
		}
		return listMensajeContenidoBuscado;
	}
	
	@PostMapping("usuario/ver/Mensaje/palabra")
	@ResponseBody
	public List<Mensaje> getMensajeEspecificoPalabra(@Valid @RequestBody Integer id, @Valid @RequestBody String palabra){
		Usuario usuario = userRepository.findById(id).orElseThrow(null);
		List<Mensaje> listMensajeContenido = usuario.getMensajesRealizados();
		List<Mensaje> listMensajeContenidoBuscado = new LinkedList<>();
		for(Mensaje mensaje : listMensajeContenido){
			if (mensaje.getContenido().contains(palabra)){
				listMensajeContenidoBuscado.add(mensaje);
			}
		}
		return listMensajeContenidoBuscado;
	}
	
	@PostMapping("usuario/buscar/nombre")
	@ResponseBody
	public List<Usuario> getUsuarioNombre(@Valid @RequestBody String nombre){
		List<Usuario> usuarios = userRepository.findAll();
		List<Usuario> usuariosBuscdos = new LinkedList<>();
		for(Usuario usuario: usuarios ) {
			if(usuario.getNombres().contains(nombre)) {
				usuariosBuscdos.add(usuario);
			}
		}
		return usuariosBuscdos;
	}
	
	@PostMapping("usuario/buscar/direccion")
	@ResponseBody
	public List<Usuario> getUsuarioDireccion(@Valid @RequestBody String direccion){
		List<Usuario> usuarios = userRepository.findAll();
		List<Usuario> usuariosBuscdos = new LinkedList<>();
		for(Usuario usuario: usuarios ) {
			if(usuario.getDireccionContacto().contains(direccion)) {
				usuariosBuscdos.add(usuario);
			}
		}
		return usuariosBuscdos;
	}
	
	@PostMapping("usuario/buscar/apellido")
	@ResponseBody
	public List<Usuario> getUsuarioApellido(@Valid @RequestBody String apellido){
		List<Usuario> usuarios = userRepository.findAll();
		List<Usuario> usuariosBuscdos = new LinkedList<>();
		for(Usuario usuario: usuarios ) {
			if(usuario.getApellidos().contains(apellido)) {
				usuariosBuscdos.add(usuario);
			}
		}
		return usuariosBuscdos;
	}
	
	
	/*@PostMapping("usuario/{apellido}")
	@ResponseBody
	public List<Usuario> getUsuarioApellido(@Valid @PathVariable String apellido){
		List<Usuario> usuarios = userRepository.findAll();
		List<Usuario> usuariosBuscdos = new LinkedList<>();
		for(Usuario usuario: usuarios ) {
			if(usuario.getApellidos().contains(apellido)) {
				usuariosBuscdos.add(usuario);
			}
		}
		return usuariosBuscdos;
	}*/
	
	
	
	
}
