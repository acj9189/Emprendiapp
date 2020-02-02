package com.EmprendiApp.Models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;


@Data
@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Notificacion {

	@Id
	@GeneratedValue
	private int Id;
	private String titulo;
	private String tipo;
	private Date fechaNotificacion;
	private String descripcion;

	
	public Notificacion() {

	}

	public Notificacion(int id, String titulo, String tipo, Date fechaNotificacion, String descripcion) {
		super();
		Id = id;
		this.titulo = titulo;
		this.tipo = tipo;
		this.fechaNotificacion = fechaNotificacion;
		this.descripcion = descripcion;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}
	
	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public Date getFechaNotificacion() {
		return fechaNotificacion;
	}

	public void setFechaNotificacion(Date fechaNotificacion) {
		this.fechaNotificacion = fechaNotificacion;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

}
