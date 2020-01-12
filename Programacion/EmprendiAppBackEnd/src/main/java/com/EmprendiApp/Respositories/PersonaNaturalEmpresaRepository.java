package com.EmprendiApp.Respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.EmprendiApp.Models.PersonaNaturalEmpresa;

@Service
@Repository
public interface PersonaNaturalEmpresaRepository extends JpaRepository<PersonaNaturalEmpresa, Integer> {

}
