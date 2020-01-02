package com.EmprendiApp.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.EmprendiApp.Models.Usuario;
import com.EmprendiApp.Respositories.UsuarioRepository;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/usuarios")
@RestController
@JsonIgnoreProperties(ignoreUnknown = true) 
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository userRepository;
	
	//@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/all")
	@ResponseBody
	private List<Usuario> getAllRomanos(){
		return userRepository.findAll();
		
	}
	

}
