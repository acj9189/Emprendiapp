package com.EmprendiApp.Models;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.springframework.web.bind.annotation.CrossOrigin;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", unique = true, nullable = false)
	private Integer id;
	
	@Column(name = "nombres", nullable = true)
	private String nombres;
	
	@Column(name = "apellidos", nullable = true)
	private String apellidos;
	
	@Column(name = "telefono", nullable = true)
	private String telefono;
	
	@Column(name = "email", nullable = true)
	private String email;
	
	@Column(name = "descripcionIntereses", nullable = true)
	private String descripcionIntereses;
	
	@Column(name = "direccionContacto", nullable = true)
	private String direccionContacto;
	

	public Usuario() {

	}
	
	public Usuario(String nombres, String apellidos, String telefono, String email,
			String descripcionIntereses, String direccionContacto) {
		this.nombres = nombres;
		this.apellidos = apellidos;
		this.telefono = telefono;
		this.email = email;
		this.descripcionIntereses = descripcionIntereses;
		this.direccionContacto = direccionContacto;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer iD) {
		id = iD;
	}

	public String getNombres() {
		return nombres;
	}

	public void setNombres(String nombres) {
		this.nombres = nombres;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDescripcionIntereses() {
		return descripcionIntereses;
	}

	public void setDescripcionIntereses(String descripcionIntereses) {
		this.descripcionIntereses = descripcionIntereses;
	}

	public String getDireccionContacto() {
		return direccionContacto;
	}

	public void setDireccionContacto(String direccionContacto) {
		this.direccionContacto = direccionContacto;
	}
	

}
