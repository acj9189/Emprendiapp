package com.EmprendiApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.EmprendiApp.Respositories.*;


@SpringBootApplication
//@CrossOrigin(origins = "http://localhost:4200")
public class EmprendiAppBackEndApplication implements CommandLineRunner {

	@Autowired
	private UsuarioRepository UsuarioRepo;
	@Autowired
	private ProductoServicioRepository Producto;
	
	@Autowired
	PersonaNaturalEmpresaRepository empresaRepo;
	
	SocioInversorRepository ss;
	
	public static void main(String[] args) {
		SpringApplication.run(EmprendiAppBackEndApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		//Usuario aa = new Usuario("Carlos", "Cardenas", "3113762626", "acj8991@gmail.com", "Emprendimientos de videojuegos", "calle 20 32-63");
		//UsuarioRepo.save(aa);
		//Producto.save(new ProductoServicio("Leche", "Leche en polvo para animales", 50, ""));
		//empresaRepo.save(new PersonaNaturalEmpresa("Andres", "", "", "", ""));
		//ss.save(new SocioInversor("", "", 55, "", true, aa));
	}

}
