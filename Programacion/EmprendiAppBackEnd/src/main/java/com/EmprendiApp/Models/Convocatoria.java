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
public class Convocatoria {
	
	@Id
	@GeneratedValue
	private int Id;
	private String nombreConvocatoria;
	private String descripcionConvocatoria;
	private String formaContacto;
	private Date fechaInicio;
	private Date fechaTerminacion;
	private String tipoConvocatoria;
	private String redessociales;
	
	
	
	public Convocatoria() {
		super();
	}

	public Convocatoria(String nombreConvocatoria, String descripcionConvocatoria, String formaContacto,
			Date fechaInicio, Date fechaTerminacion, String tipoConvocatoria, String redessociales) {
		this.nombreConvocatoria = nombreConvocatoria;
		this.descripcionConvocatoria = descripcionConvocatoria;
		this.formaContacto = formaContacto;
		this.fechaInicio = fechaInicio;
		this.fechaTerminacion = fechaTerminacion;
		this.tipoConvocatoria = tipoConvocatoria;
		this.redessociales = redessociales;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getNombreConvocatoria() {
		return nombreConvocatoria;
	}

	public void setNombreConvocatoria(String nombreConvocatoria) {
		this.nombreConvocatoria = nombreConvocatoria;
	}

	public String getDescripcionConvocatoria() {
		return descripcionConvocatoria;
	}

	public void setDescripcionConvocatoria(String descripcionConvocatoria) {
		this.descripcionConvocatoria = descripcionConvocatoria;
	}

	public String getFormaContacto() {
		return formaContacto;
	}

	public void setFormaContacto(String formaContacto) {
		this.formaContacto = formaContacto;
	}

	public Date getFechaInicio() {
		return fechaInicio;
	}

	public void setFechaInicio(Date fechaInicio) {
		this.fechaInicio = fechaInicio;
	}

	public Date getFechaTerminacion() {
		return fechaTerminacion;
	}

	public void setFechaTerminacion(Date fechaTerminacion) {
		this.fechaTerminacion = fechaTerminacion;
	}

	public String getTipoConvocatoria() {
		return tipoConvocatoria;
	}

	public void setTipoConvocatoria(String tipoConvocatoria) {
		this.tipoConvocatoria = tipoConvocatoria;
	}

	public String getRedessociales() {
		return redessociales;
	}

	public void setRedessociales(String redessociales) {
		this.redessociales = redessociales;
	}

}
