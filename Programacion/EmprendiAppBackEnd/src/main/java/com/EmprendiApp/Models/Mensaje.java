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
	
//	@OneToOne()
	//@Column(name = "destinatario", nullable = true)
	//private Usuario destinatario;
	
	
	public Mensaje() {
		
	}

	public Mensaje( String contenido, Date fechaRealizadoMensaje, byte recibido) {
		this.contenido = contenido;
		this.fechaRealizadoMensaje = fechaRealizadoMensaje;
		this.recibido = recibido;
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
	

}
