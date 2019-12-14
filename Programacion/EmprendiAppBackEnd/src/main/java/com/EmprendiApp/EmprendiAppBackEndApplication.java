package com.EmprendiApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.EmprendiApp.Models.Usuario;
import com.EmprendiApp.Respositories.UsuarioRepository;

@SpringBootApplication
public class EmprendiAppBackEndApplication implements CommandLineRunner {

	@Autowired
	UsuarioRepository UsuarioRepo;
	
	public static void main(String[] args) {
		SpringApplication.run(EmprendiAppBackEndApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		UsuarioRepo.save(new Usuario("Andres", "Cardenas", "3206755517", "acj8991@gmail.com", "Emprendimientos de videojuegos", "calle 20 32-63"));
		
		
		
	}

}
