package com.EmprendiApp.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EmprendiApp.Models.Usuario;
import com.EmprendiApp.Respositories.UsuarioRepository;


@RequestMapping("/")
@RestController
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository userRepository;
	
	@GetMapping("/allUsers")
	private List<Usuario> getAllRomanos(){
		return userRepository.findAll();
		
	}
	

}
