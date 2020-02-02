package com.EmprendiApp.Respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.EmprendiApp.Models.Llamada;


@Service
@Repository
public interface LlamadaRepository  extends JpaRepository<Llamada, Integer>{

}
