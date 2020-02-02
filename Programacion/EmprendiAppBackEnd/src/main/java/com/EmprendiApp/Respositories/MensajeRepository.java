package com.EmprendiApp.Respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.EmprendiApp.Models.Mensaje;

@Service
@Repository
public interface MensajeRepository  extends JpaRepository<Mensaje, Integer> {

}
