package Respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import Models.ProductoServicio;

@Service
@Repository
public interface ProductoRepository extends JpaRepository<ProductoServicio, Integer>{

}
