package com.EmprendiApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.EmprendiApp.Models.*;
import com.EmprendiApp.Respositories.*;


@SpringBootApplication
//@CrossOrigin(origins = "http://localhost:4200")
public class EmprendiAppBackEndApplication implements CommandLineRunner {

	@Autowired
	UsuarioRepository UsuarioRepo;
	@Autowired
	ProductoServicioRepository Producto;
	
	@Autowired
	PersonaNaturalEmpresaRepository empresaRepo;
	
	public static void main(String[] args) {
		SpringApplication.run(EmprendiAppBackEndApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		//UsuarioRepo.save(new Usuario("Carlos", "Cardenas", "3113762626", "acj8991@gmail.com", "Emprendimientos de videojuegos", "calle 20 32-63"));
		//Producto.save(new ProductoServicio("Leche", "Leche en polvo para animales", 50, ""));
		empresaRepo.save(new PersonaNaturalEmpresa("Andres", "", "", "", ""));
		
		
		
	}

}
