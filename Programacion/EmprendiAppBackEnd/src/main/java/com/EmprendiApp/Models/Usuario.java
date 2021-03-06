package com.EmprendiApp.Models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;


@Data
@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", unique = true, nullable = false)
	private Integer id;
	
	@Column(name = "nombres", nullable = true)
	private String nombres;
	
	@Column(name = "apellidos", nullable = true)
	private String apellidos;
	
	@Column(name = "telefono", nullable = true)
	private String telefono;
	
	@Column(name = "email", nullable = true)
	private String email;
	
	@Column(name = "descripcionIntereses", nullable = true)
	private String descripcionIntereses;
	
	@Column(name = "direccionContacto", nullable = true)
	private String direccionContacto;
	
	@Column(name = "redesSociales", nullable = true)
	private String redesSociales;
	
	@JoinColumn(name = "perfil_id", unique = false, nullable = true)
	@OneToOne()
	private Perfil perfil;
	
	@OneToMany()
	private List<Mensaje> mensajesRealizados;
	
	@OneToMany()
	private List<Llamada> llamadRealizadas;
	
	@ManyToMany()
	private List<Convocatoria> convocatoriasInterez;
	
	//@JoinTable(name = "lista_enpresas", joinColumns = @JoinColumn(name = "lista_enpresas_id", nullable = false), inverseJoinColumns = @JoinColumn(name="lista_clietes_id", nullable = false) )
	@ManyToMany()
	private List<PersonaNaturalEmpresa> esCLiente;

	public Usuario() {
	}
	
	public Usuario(Integer id, String nombres, String apellidos, String telefono, String email,	String descripcionIntereses, String direccionContacto, String redesSociales, Perfil perfil) {
		this.id = id;
		this.nombres = nombres;
		this.apellidos = apellidos;
		this.telefono = telefono;
		this.email = email;
		this.descripcionIntereses = descripcionIntereses;
		this.direccionContacto = direccionContacto;
		this.redesSociales = redesSociales;
		this.perfil = perfil;
	}

	public Perfil getPerfil() {
		return perfil;
	}

	public void setPerfil(Perfil perfil) {
		this.perfil = perfil;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer iD) {
		id = iD;
	}

	public String getNombres() {
		return nombres;
	}

	public void setNombres(String nombres) {
		this.nombres = nombres;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDescripcionIntereses() {
		return descripcionIntereses;
	}

	public void setDescripcionIntereses(String descripcionIntereses) {
		this.descripcionIntereses = descripcionIntereses;
	}

	public String getDireccionContacto() {
		return direccionContacto;
	}

	public void setDireccionContacto(String direccionContacto) {
		this.direccionContacto = direccionContacto;
	}

	public String getRedesSociales() {
		return redesSociales;
	}

	public void setRedesSociales(String redesSociales) {
		this.redesSociales = redesSociales;
	}

	public List<Mensaje> getMensajesRealizados() {
		return mensajesRealizados;
	}

	public void setMensajesRealizados(List<Mensaje> mensajesRealizados) {
		this.mensajesRealizados = mensajesRealizados;
	}

	public List<Llamada> getLlamadRealizadas() {
		return llamadRealizadas;
	}

	public void setLlamadRealizadas(List<Llamada> llamadRealizadas) {
		this.llamadRealizadas = llamadRealizadas;
	}

	public List<Convocatoria> getConvocatoriasInterez() {
		return convocatoriasInterez;
	}

	public void setConvocatoriasInterez(List<Convocatoria> convocatoriasInterez) {
		this.convocatoriasInterez = convocatoriasInterez;
	}

	public List<PersonaNaturalEmpresa> getEsCLiente() {
		return esCLiente;
	}

	public void setEsCLiente(List<PersonaNaturalEmpresa> esCLiente) {
		this.esCLiente = esCLiente;
	}
	
	

}
