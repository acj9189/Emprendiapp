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
public class Mensaje {
	
	@Id
	@GeneratedValue
	private int Id;
	private String contenido;
	private Date fechaRealizadoMensaje;
	private byte recibido;
	
	
	public Mensaje() {
		
	}

	public Mensaje( String contenido, Date fechaRealizadoMensaje, byte recibido) {
		this.contenido = contenido;
		this.fechaRealizadoMensaje = fechaRealizadoMensaje;
		this.recibido = recibido;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getContenido() {
		return contenido;
	}

	public void setContenido(String contenido) {
		this.contenido = contenido;
	}

	public Date getFechaRealizadoMensaje() {
		return fechaRealizadoMensaje;
	}

	public void setFechaRealizadoMensaje(Date fechaRealizadoMensaje) {
		this.fechaRealizadoMensaje = fechaRealizadoMensaje;
	}

	public byte getRecibido() {
		return recibido;
	}

	public void setRecibido(byte recibido) {
		this.recibido = recibido;
	}
	
	
	
	
	

}
