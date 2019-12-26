package Respositories;

import org.springframework.data.jpa.repository.JpaRepository;

import Models.PersonaNaturalEmpresa;

public interface EmpresaRepository extends JpaRepository<PersonaNaturalEmpresa, Integer>{

}
