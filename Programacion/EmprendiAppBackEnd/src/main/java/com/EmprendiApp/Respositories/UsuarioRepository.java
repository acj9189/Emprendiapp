package com.EmprendiApp.Respositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.EmprendiApp.Models.Usuario;


public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

}
