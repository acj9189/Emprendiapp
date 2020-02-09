package com.EmprendiApp.Models;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;


@Data
@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class ProductoServicio {
	
	@Id
	@GeneratedValue
	@Column(name = "id", unique = true, nullable = false)
	private Integer id;
	
	@Column(name = "nombre", nullable = true)
	private String nombre;
	
	@Column(name = "descripcionProductoServicio", nullable = true)
	private String descripcionProductoServicio;
	
	@Column(name = "costoUnidad", nullable = true)
	private Integer costoUnidad;
	
	@Column(name = "descripcionProblemaQSoluciona", nullable = true)
	private String descripcionProblemaQSoluciona;
	
	@Column(name = "tipoProductoServicio", nullable = true)
	private boolean tipoProductoServicio;
	


	public ProductoServicio(Integer id, String nombre, String descripcionProductoServicio, Integer costoUnidad,
			String descripcionProblemaQSoluciona, boolean tipoProductoServicio) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.descripcionProductoServicio = descripcionProductoServicio;
		this.costoUnidad = costoUnidad;
		this.descripcionProblemaQSoluciona = descripcionProblemaQSoluciona;
		this.tipoProductoServicio = tipoProductoServicio;
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

	public boolean isTipoProductoServicio() {
		return tipoProductoServicio;
	}

	public void setTipoProductoServicio(boolean tipoProductoServicio) {
		this.tipoProductoServicio = tipoProductoServicio;
	}

}
