package com.EmprendiApp.Models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;


@Data
@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Llamada {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", unique = true, nullable = false)
	private int id;
	
	@Column(name = "fechaLlamadaRealizada", unique = true, nullable = false)
	private Date fechaLlamadaRealizada;
	
	@Column(name = "respondio", unique = true, nullable = false)
	private boolean respondio;
	
	public Llamada() {
		
	}
	
	public Llamada(Date fechaLlamadaRealizada, boolean respondio) {
		this.fechaLlamadaRealizada = fechaLlamadaRealizada;
		this.respondio = respondio;
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getFechaLlamadaRealizada() {
		return fechaLlamadaRealizada;
	}

	public void setFechaLlamadaRealizada(Date fechaLlamadaRealizada) {
		this.fechaLlamadaRealizada = fechaLlamadaRealizada;
	}

	public boolean isRespondio() {
		return respondio;
	}

	public void setRespondio(boolean respondio) {
		this.respondio = respondio;
	}
	
	
	
	

}
