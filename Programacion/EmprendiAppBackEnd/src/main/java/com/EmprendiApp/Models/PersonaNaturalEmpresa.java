package com.EmprendiApp.Models;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import org.springframework.web.bind.annotation.CrossOrigin;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class PersonaNaturalEmpresa {
	
	@Id
	@GeneratedValue
	@Column(name = "id", unique = true, nullable = false)
	private Integer id;
	private String nombre;
	private String direccion;
	private String telefonoContacto;
	private String redesSociales;
	private String videoPitch;

	//@OneToMany()
	//@JoinColumn(name = "miebrosDuenos")
	//private Set<Usuario> miebrosDuenos; // List<Ussuario> miebrosDuenos;
	
	//@ManyToMany(cascade = CascadeType.ALL)// hay cosas que analizar
	//@JoinTable(name = "Produce")
	//private Set<ProductoServicio> productos;

	
	public PersonaNaturalEmpresa() {
		
	}
	
	public PersonaNaturalEmpresa(String nombre, String direccion, String telefonoContacto,
			String redesSociales, String videoPitch) {
		//super();
		this.nombre = nombre;
		this.direccion = direccion;
		this.telefonoContacto = telefonoContacto;
		this.redesSociales = redesSociales;
		this.videoPitch = videoPitch;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer iD) {
		id = iD;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getTelefonoContacto() {
		return telefonoContacto;
	}

	public void setTelefonoContacto(String telefonoContacto) {
		this.telefonoContacto = telefonoContacto;
	}

	public String getRedesSociales() {
		return redesSociales;
	}

	public void setRedesSociales(String redesSociales) {
		this.redesSociales = redesSociales;
	}

	public String getVideoPitch() {
		return videoPitch;
	}

	public void setVideoPitch(String videoPitch) {
		this.videoPitch = videoPitch;
	}
	
	
	
	
}
