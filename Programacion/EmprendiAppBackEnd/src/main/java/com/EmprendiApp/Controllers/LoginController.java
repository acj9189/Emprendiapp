package com.EmprendiApp.Controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.EmprendiApp.Models.Login;
import com.EmprendiApp.Models.Usuario;
import com.EmprendiApp.Respositories.LoginRepository;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/loging")
@RestController
@JsonIgnoreProperties(ignoreUnknown = true) 
public class LoginController {
	
	@Autowired
	private LoginRepository loginRepository;
	
	@PostMapping("/login")
	@ResponseBody
	public Usuario login(@Valid String username, @Valid String password ) {
		List<Login> lista = loginRepository.findAll();
		for(Login usuarioB : lista) {
			if((usuarioB.getUsername().equals(username)) && (usuarioB.getPasword().equals(password))){
				return usuarioB.getUsuario();
			}
		}
	return null;
	}

}
