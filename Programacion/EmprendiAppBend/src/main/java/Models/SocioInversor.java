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
public class SocioInversor extends Usuario{
	
	private String areasExperticia;
	private String conociminetoQAporta;
	private int cantidadHorasDispuestoTrabajar;
	private String areasInteres;
	private boolean tipoSocioInversor; // Cuando la varible esta en false es Socio, cuando esta en true es Inversor
	
	
	public SocioInversor() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public SocioInversor(String nombres, String apellidos, String telefono, String email, String descripcionIntereses,
			String direccionContacto, String areasExperticia, String conociminetoQAporta, int cantidadHorasDispuestoTrabajar,
			String areasInteres, boolean tipoSocioInversor) {
		super(nombres, apellidos, telefono, email, descripcionIntereses, direccionContacto);
		this.areasExperticia = areasExperticia;
		this.conociminetoQAporta = conociminetoQAporta;
		this.cantidadHorasDispuestoTrabajar = cantidadHorasDispuestoTrabajar;
		this.areasInteres = areasInteres;
		this.tipoSocioInversor = tipoSocioInversor;
	}

	@Override
	public Integer getId() {
		// TODO Auto-generated method stub
		return super.getId();
	}
	
	@Override
	public void setId(Integer iD) {
		// TODO Auto-generated method stub
		super.setId(iD);
	}
	
	@Override
	public String getNombres() {
		// TODO Auto-generated method stub
		return super.getNombres();
	}
	
	@Override
	public void setNombres(String nombres) {
		// TODO Auto-generated method stub
		super.setNombres(nombres);
	}
	
	@Override
	public String getApellidos() {
		// TODO Auto-generated method stub
		return super.getApellidos();
	}
	
	@Override
	public void setApellidos(String apellidos) {
		// TODO Auto-generated method stub
		super.setApellidos(apellidos);
	}
	
	@Override
	public String getTelefono() {
		// TODO Auto-generated method stub
		return super.getTelefono();
	}
	
	@Override
	public void setTelefono(String telefono) {
		// TODO Auto-generated method stub
		super.setTelefono(telefono);
	}
	
	@Override
	public String getEmail() {
		// TODO Auto-generated method stub
		return super.getEmail();
	}
	
	@Override
	public void setEmail(String email) {
		// TODO Auto-generated method stub
		super.setEmail(email);
	}
	
	@Override
	public String getDescripcionIntereses() {
		// TODO Auto-generated method stub
		return super.getDescripcionIntereses();
	}
	
	@Override
	public void setDescripcionIntereses(String descripcionIntereses) {
		// TODO Auto-generated method stub
		super.setDescripcionIntereses(descripcionIntereses);
	}
	
	@Override
	public String getDireccionContacto() {
		// TODO Auto-generated method stub
		return super.getDireccionContacto();
	}
	
	@Override
	public void setDireccionContacto(String direccionContacto) {
		// TODO Auto-generated method stub
		super.setDireccionContacto(direccionContacto);
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
