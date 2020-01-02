package com.EmprendiApp.Models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Llamada {
	
	@Id
	@GeneratedValue
	private int Id;
	private Date fechaLlamadaRealizada;
	private boolean respondio;
	
	public Llamada() {
		
	}
	
	public Llamada(Date fechaLlamadaRealizada, boolean respondio) {
		this.fechaLlamadaRealizada = fechaLlamadaRealizada;
		this.respondio = respondio;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
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
