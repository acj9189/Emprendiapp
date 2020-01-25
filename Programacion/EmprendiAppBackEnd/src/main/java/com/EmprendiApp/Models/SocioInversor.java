package com.EmprendiApp.Models;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.EmprendiApp.Models.Usuario;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class SocioInversor{
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", unique = true, nullable = false)
	private Integer id;
	
	@Column(name = "areasExperticia", nullable = true)
	private String areasExperticia;
	
	@Column(name = "conociminetoQAporta", nullable = true)
	private String conociminetoQAporta;
	
	@Column(name = "cantidadHorasDispuestoTrabajar", nullable = true)
	private int cantidadHorasDispuestoTrabajar;
	
	@Column(name = "areasInteres", nullable = true)
	private String areasInteres;
	
	@Column(name = "tipoSocioInversor", nullable = true)
	private boolean tipoSocioInversor; // Cuando la varible esta en false es Socio, cuando esta en true es Inversor
	
	
	@JoinColumn(name = "Usuario_id", unique = true, nullable = false)
	@OneToOne(cascade = CascadeType.ALL)
	private Usuario usuario;

	public SocioInversor(Integer id, String areasExperticia, String conociminetoQAporta,
			int cantidadHorasDispuestoTrabajar, String areasInteres, boolean tipoSocioInversor, Usuario usuario) {
		super();
		this.id = id;
		this.areasExperticia = areasExperticia;
		this.conociminetoQAporta = conociminetoQAporta;
		this.cantidadHorasDispuestoTrabajar = cantidadHorasDispuestoTrabajar;
		this.areasInteres = areasInteres;
		this.tipoSocioInversor = tipoSocioInversor;
		this.usuario = usuario;
	}

	public SocioInversor() {
	}
	
	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getAreasExperticia() {
		return areasExperticia;
	}

	public void setAreasExperticia(String areasExperticia) {
		this.areasExperticia = areasExperticia;
	}

	public String getConociminetoQAporta() {
		return conociminetoQAporta;
	}

	public void setConociminetoQAporta(String conociminetoQAporta) {
		this.conociminetoQAporta = conociminetoQAporta;
	}

	public int getCantidadHorasDispuestoTrabajar() {
		return cantidadHorasDispuestoTrabajar;
	}

	public void setCantidadHorasDispuestoTrabajar(int cantidadHorasDispuestoTrabajar) {
		this.cantidadHorasDispuestoTrabajar = cantidadHorasDispuestoTrabajar;
	}

	public String getAreasInteres() {
		return areasInteres;
	}

	public void setAreasInteres(String areasInteres) {
		this.areasInteres = areasInteres;
	}

	public boolean isTipoSocioInversor() {
		return tipoSocioInversor;
	}

	public void setTipoSocioInversor(boolean tipoSocioInversor) {
		this.tipoSocioInversor = tipoSocioInversor;
	}

	
	

}
