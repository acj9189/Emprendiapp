package com.EmprendiApp.Models;

import java.util.LinkedList;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.springframework.web.bind.annotation.CrossOrigin;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import antlr.collections.List;
import lombok.Data;

@Data
@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class Login {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", unique = true, nullable = false)
	private Integer id;
	
	@Column(name = "username", nullable = true)
	private String username;
	
	@Column(name = "password", nullable = true)
	private String pasword;
	
	@Column(name = "activo", nullable = true)
	private boolean activo;
	
	@JoinColumn(name = "usuario_id", unique = true, nullable = false)
	@OneToOne(cascade = CascadeType.ALL)
	private Usuario usuario;
	
	public Login(Integer id, String username, String pasword, boolean activo) {
		this.id = id;
		this.username = username;
		this.pasword = pasword;
		this.activo = activo;
	}

	public Login() {
	
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPasword() {
		return pasword;
	}

	public void setPasword(String pasword) {
		this.pasword = pasword;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public boolean isActivo() {
		return activo;
	}

	public void setActivo(boolean activo) {
		this.activo = activo;
	}
	

}
