package com.EmprendiApp.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EmprendiApp.Models.UsuarioAsesorConsultor;
import com.EmprendiApp.Respositories.UsuarioAsesorConsultorRepository;


@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/aa")
@RestController
public class UsuarioAsesorConsultorController {
	
	@Autowired
	private UsuarioAsesorConsultorRepository userRepository;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/allAsesores")
	private List<UsuarioAsesorConsultor> getAllRomanos(){
		return userRepository.findAll();
		
	}

}
