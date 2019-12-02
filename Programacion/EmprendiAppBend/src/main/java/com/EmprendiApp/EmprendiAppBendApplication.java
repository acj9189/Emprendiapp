package com.EmprendiApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import Models.ProductoServicio;
import Respositories.ProductoRepository;


@SpringBootApplication(scanBasePackages={
"Controllers", "Models", "Repositories"})

public class EmprendiAppBendApplication  implements CommandLineRunner{

	@Autowired
	ProductoRepository productoRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(EmprendiAppBendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		productoRepository.save(new ProductoServicio( "CD", "Hola", 45, "fff"));
		
		
	}

}
