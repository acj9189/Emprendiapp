package com.EmprendiApp.Models;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class ProductoServicio {
	
	@Id
	@GeneratedValue
	@Column(name = "id", unique = true, nullable = false)
	private Integer id;
	private String nombre;
	private String descripcionProductoServicio;
	private Integer costoUnidad;
	private String descripcionProblemaQSoluciona;
	
	/*@ManyToMany(mappedBy = "ProductoServicios")
	private Set<PersonaNaturalEmpresa> empresas;*/
	
	
	
	public ProductoServicio(String nombre, String descripcionProductoServicio, Integer costoUnidad,
			String descripcionProblemaQSoluciona) {
		this.nombre = nombre;
		this.descripcionProductoServicio = descripcionProductoServicio;
		this.costoUnidad = costoUnidad;
		this.descripcionProblemaQSoluciona = descripcionProblemaQSoluciona;
	}

	public ProductoServicio() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcionProductoServicio() {
		return descripcionProductoServicio;
	}

	public void setDescripcionProductoServicio(String descripcionProductoServicio) {
		this.descripcionProductoServicio = descripcionProductoServicio;
	}

	public Integer getCostoUnidad() {
		return costoUnidad;
	}

	public void setCostoUnidad(Integer costoUnidad) {
		this.costoUnidad = costoUnidad;
	}

	public String getDescripcionProblemaQSoluciona() {
		return descripcionProblemaQSoluciona;
	}

	public void setDescripcionProblemaQSoluciona(String descripcionProblemaQSoluciona) {
		this.descripcionProblemaQSoluciona = descripcionProblemaQSoluciona;
	}
	
	
	
	

}
