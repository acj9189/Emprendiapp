package com.EmprendiApp.Respositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.EmprendiApp.Models.AsesorConsultor;
import com.EmprendiApp.Models.Mensaje;

public interface AsesorRepository extends JpaRepository<AsesorConsultor, Integer>  {

}
