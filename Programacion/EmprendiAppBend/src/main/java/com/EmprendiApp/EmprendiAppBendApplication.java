package com.EmprendiApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import Respositories.ProductoRepository;

@SpringBootApplication
@ComponentScan({"Controllers"})

public class EmprendiAppBendApplication implements CommandLineRunner{

	@Autowired
	private ProductoRepository productoRepository;
	public static void main(String[] args) {
		SpringApplication.run(EmprendiAppBendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		productoRepository.save(new ProductoServicio( "CD", "Hola", 45, "fff"));
		// TODO Auto-generated method stub

		
	}

}
