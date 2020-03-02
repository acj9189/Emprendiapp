package com.EmprendiApp.Models;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.OneToOne;

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
	
	@Column(name = "id_emisor", nullable = true)
	private int id_emisor;
	
	@Column(name = "fechaRealizadoMensaje", nullable = true)
	private Date fechaRealizadoMensaje;
	
	@Column(name = "recibido", nullable = true)
	private byte recibido;
	
	@Column(name = "nombreOrigen", nullable = true)
	private String nombreOrigen;
	
	@Column(name = "correoOrigen", nullable = true)
	private String correoOrigen;
	
	@Column(name = "correoDestino", nullable = true)
	private String correoDestino;
	
	@Column(name = "asunto", nullable = true)
	private String asunto;
	
	
	public Mensaje() {
		
	}
	
	public Mensaje(int id, String contenido, Date fechaRealizadoMensaje, byte recibido, String nombreOrigen,
			String correoOrigen, String correosDestino, String asunto) {
		super();
		this.id = id;
		this.contenido = contenido;
		this.fechaRealizadoMensaje = fechaRealizadoMensaje;
		this.recibido = recibido;
		this.nombreOrigen = nombreOrigen;
		this.correoOrigen = correoOrigen;
		this.correoDestino = correosDestino;
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

	public String getCorreoDestino() {
		return correoDestino;
	}

	public void setCorreoDestino(String correoDestino) {
		this.correoDestino = correoDestino;
	}

	public String getAsunto() {
		return asunto;
	}

	public void setAsunto(String asunto) {
		this.asunto = asunto;
	}

	public String getCorreoOrigen() {
		return correoOrigen;
	}

	public void setCorreoOrigen(String correoOrigen) {
		this.correoOrigen = correoOrigen;
	}

	public int getId_emisor() {
		return id_emisor;
	}

	public void setId_emisor(int id_emisor) {
		this.id_emisor = id_emisor;
	}
	
	

}
