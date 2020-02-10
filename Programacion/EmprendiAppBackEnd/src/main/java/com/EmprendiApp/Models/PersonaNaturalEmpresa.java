package com.EmprendiApp.Models;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import org.springframework.web.bind.annotation.CrossOrigin;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;


@Data
@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class PersonaNaturalEmpresa {
	
	@Id
	@GeneratedValue
	@Column(name = "id", unique = true, nullable = false)
	private Integer id;
	
	@Column(name = "nombre", nullable = true)
	private String nombre;
	
	@Column(name = "direccion", nullable = true)
	private String direccion;
	
	@Column(name = "telefonoContacto", nullable = true)
	private String telefonoContacto;
	
	@Column(name = "redesSociales", nullable = true)
	private String redesSociales;
	
	@Column(name = "videoPitch", nullable = true)
	private String videoPitch;
	
	@Column(name = "tipo", nullable = true)
	private boolean tipo;

	@JoinColumn(name = "productos_id", unique = true, nullable = false)
	@OneToMany()
	private List<ProductoServicio> productos;
	
	@ManyToMany()
	private List<Usuario> sonClientesP;
	
	@ManyToMany()
	private List<PersonaNaturalEmpresa> sonClientesE;
	
	@ManyToMany()
	private List<SocioInversor> sonSocios;
	
	@ManyToMany()
	private List<AsesorConsultor> sonAsesores;
	
	
	public PersonaNaturalEmpresa() {
		
	}
	
	public PersonaNaturalEmpresa(Integer id, String nombre, String direccion, String telefonoContacto, String redesSociales, String videoPitch, boolean tipo, List<ProductoServicio> productos, List<Usuario> sonCLientes) {
		this.id = id;
		this.nombre = nombre;
		this.direccion = direccion;
		this.telefonoContacto = telefonoContacto;
		this.redesSociales = redesSociales;
		this.videoPitch = videoPitch;
		this.tipo = tipo;
		this.productos = productos;
		this.sonClientesP = sonCLientes;
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

	public boolean isTipo() {
		return tipo;
	}

	public void setTipo(boolean tipo) {
		this.tipo = tipo;
	}

	public List<ProductoServicio> getProductos() {
		return productos;
	}

	public void setProductos(List<ProductoServicio> productos) {
		this.productos = productos;
	}

	public List<Usuario> getSonCLientes() {
		return sonClientesP;
	}

	public void setSonCLientes(List<Usuario> sonCLientes) {
		this.sonClientesP = sonCLientes;
	}
	
}
