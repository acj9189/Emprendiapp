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
import lombok.Data;

@Data
@Entity
//@AllArgsConstructor
//@NoArgsConstructor
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class AsesorConsultor{
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", unique = true, nullable = false)
	private Integer id;
	
	@Column(name = "areasExperticia", nullable = true)
	private String areasExperticia;
	
	@Column(name = "conociminetoQAporta", nullable = true)
	private String conociminetoQAporta;
	
	@Column(name = "costoHora", nullable = true)
	private int costoHora;
	
	@Column(name = "areasInteres", nullable = true)
	private String areasInteres;
	
	@Column(name = "tipoAsesorConsultor", nullable = false)
	private boolean tipoAsesorConsultor; 
	
	@Column(name = "nombreAsesorConsultor", nullable = false)
	private String nombreAsesorConsultor; 
	
	@JoinColumn(name = "usuario_id", unique = true, nullable = false) // true asesor // flase consultor
	@OneToOne(cascade = CascadeType.ALL)
	private Usuario usuario;


	


	public AsesorConsultor(Integer id, String areasExperticia, String conociminetoQAporta, int costoHora,
			String areasInteres, boolean tipoAsesorConsultor, String nombreAsesorConsultor, Usuario usuario) {
		super();
		this.id = id;
		this.areasExperticia = areasExperticia;
		this.conociminetoQAporta = conociminetoQAporta;
		this.costoHora = costoHora;
		this.areasInteres = areasInteres;
		this.tipoAsesorConsultor = tipoAsesorConsultor;
		this.nombreAsesorConsultor = nombreAsesorConsultor;
		this.usuario = usuario;
	}


	public AsesorConsultor() {
		super();
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


	public int getCostoHora() {
		return costoHora;
	}


	public void setCostoHora(int costoHora) {
		this.costoHora = costoHora;
	}


	public String getAreasInteres() {
		return areasInteres;
	}


	public void setAreasInteres(String areasInteres) {
		this.areasInteres = areasInteres;
	}


	public boolean isTipoAsesorConsultor() {
		return tipoAsesorConsultor;
	}


	public void setTipoAsesorConsultor(boolean tipoAsesorCOnsultor) {
		this.tipoAsesorConsultor = tipoAsesorCOnsultor;
	}
	
	


	public String getNombreAsesorConsultor() {
		return nombreAsesorConsultor;
	}


	public void setNombreAsesorConsultor(String nombreAsesorConsultor) {
		this.nombreAsesorConsultor = nombreAsesorConsultor;
	}


	public Usuario getUsuario() {
		return usuario;
	}


	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
}
