package com.EmprendiApp.Respositories;

import org.springframework.data.jpa.repository.JpaRepository;


import com.EmprendiApp.Models.Login;

public interface LoginRepository extends JpaRepository<Login, Integer>  {

}
