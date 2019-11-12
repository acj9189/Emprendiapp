package Respositories;

import org.springframework.data.jpa.repository.JpaRepository;

import Models.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

}
