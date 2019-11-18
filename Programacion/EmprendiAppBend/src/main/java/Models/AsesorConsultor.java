package Models;

import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class AsesorConsultor extends Usuario {

	private String areasExperticia;
	private Integer costoHoraAsesorada;
	private String direccionOficina;
	private String numeroContacto;
	private String areasInteres;
	private boolean tipoAsesorConsultor; // Cuando la varible esta en false es Asesor, cuando esta en true es Consultor

	public AsesorConsultor() {
		super();
	}

	public AsesorConsultor(String nombres, String apellidos, String telefono, String email, String descripcionIntereses,
			String direccionContacto, String areasExperticia, Integer costoHoraAsesorada, String direccionOficina,
			String numeroContacto, String areasInteres, boolean tipoAsesorConsultor) {
		super(nombres, apellidos, telefono, email, descripcionIntereses, direccionContacto);
		this.areasExperticia = areasExperticia;
		this.costoHoraAsesorada = costoHoraAsesorada;
		this.direccionOficina = direccionOficina;
		this.numeroContacto = numeroContacto;
		this.areasInteres = areasInteres;
		this.tipoAsesorConsultor = tipoAsesorConsultor;
	}

	@Override
	public Integer getId() {
		return super.getId();
	}

	@Override
	public void setId(Integer iD) {
		super.setId(iD);
	}

	@Override
	public String getNombres() {
		return super.getNombres();
	}

	@Override
	public void setNombres(String nombres) {
		super.setNombres(nombres);
	}

	@Override
	public String getApellidos() {
		return super.getApellidos();
	}

	@Override
	public void setApellidos(String apellidos) {
		super.setApellidos(apellidos);
	}

	@Override
	public String getTelefono() {
		return super.getTelefono();
	}

	@Override
	public void setTelefono(String telefono) {
		super.setTelefono(telefono);
	}

	@Override
	public String getEmail() {
		return super.getEmail();
	}

	@Override
	public void setEmail(String email) {
		super.setEmail(email);
	}

	@Override
	public String getDescripcionIntereses() {
		return super.getDescripcionIntereses();
	}

	@Override
	public void setDescripcionIntereses(String descripcionIntereses) {
		super.setDescripcionIntereses(descripcionIntereses);
	}

	@Override
	public String getDireccionContacto() {
		return super.getDireccionContacto();
	}

	@Override
	public void setDireccionContacto(String direccionContacto) {
		super.setDireccionContacto(direccionContacto);
	}

	public String getAreasExperticia() {
		return areasExperticia;
	}

	public void setAreasExperticia(String areasExperticia) {
		this.areasExperticia = areasExperticia;
	}

	public Integer getCostoHoraAsesorada() {
		return costoHoraAsesorada;
	}

	public void setCostoHoraAsesorada(Integer costoHoraAsesorada) {
		this.costoHoraAsesorada = costoHoraAsesorada;
	}

	public String getDireccionOficina() {
		return direccionOficina;
	}

	public void setDireccionOficina(String direccionOficina) {
		this.direccionOficina = direccionOficina;
	}

	public String getNumeroContacto() {
		return numeroContacto;
	}

	public void setNumeroContacto(String numeroContacto) {
		this.numeroContacto = numeroContacto;
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

	public void setTipoAsesorConsultor(boolean tipoAsesorOConsultor) {
		this.tipoAsesorConsultor = tipoAsesorOConsultor;
	}

}
