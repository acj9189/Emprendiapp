package com.EmprendiApp.Models;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Mensaje {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", unique = true, nullable = false)
	private int id;
	
	@Column(name = "contenido", nullable = true)
	private String contenido;
	
	@Column(name = "fechaRealizadoMensaje", nullable = true)
	private Date fechaRealizadoMensaje;
	
	@Column(name = "recibido", nullable = true)
	private byte recibido;
	
	@Column(name = "nombreOrigen", nullable = true)
	private String nombreOrigen;
	
	@Column(name = "correosDestino", nullable = true)
	private String correosDestino;
	
	@Column(name = "asunto", nullable = true)
	private String asunto;
	

	
	public Mensaje() {
		
	}
	
	public Mensaje(int id, String contenido, Date fechaRealizadoMensaje, byte recibido, String nombreOrigen,
			String correosDestino, String asunto) {
		super();
		this.id = id;
		this.contenido = contenido;
		this.fechaRealizadoMensaje = fechaRealizadoMensaje;
		this.recibido = recibido;
		this.nombreOrigen = nombreOrigen;
		this.correosDestino = correosDestino;
		this.asunto = asunto;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public String getNombreOrigen() {
		return nombreOrigen;
	}

	public void setNombreOrigen(String nombreOrigen) {
		this.nombreOrigen = nombreOrigen;
	}

	public String getCorreosDestino() {
		return correosDestino;
	}

	public void setCorreosDestino(String correoDestino) {
		this.correosDestino = correoDestino;
	}

	public String getAsunto() {
		return asunto;
	}

	public void setAsunto(String asunto) {
		this.asunto = asunto;
	}


	
	

}
