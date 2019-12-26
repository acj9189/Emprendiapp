package com.EmprendiApp.Respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.EmprendiApp.Models.Usuario;


//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

}
