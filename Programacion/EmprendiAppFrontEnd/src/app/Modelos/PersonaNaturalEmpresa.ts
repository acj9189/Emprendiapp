import { ProductoServicio } from '../Modelos/ProductoServicio';
import { Usuario } from '../Modelos/Usuario';
import { SocioInversor } from '../Modelos/SocioInversor';
import { AsesorConultor } from '../Modelos/AsesorConsultor';

export class PersonaNaturalEmpresa{
    id: number;
	nombre: String ;
	direccion: String ;
	telefonoContacto: String ;
	redesSociales: String ;
	videoPitch: String ;
	tipo : boolean;
	productos : ProductoServicio[];
	sonClientesP : Usuario[];
	sonClientesE : PersonaNaturalEmpresa[]
	sonSocios : SocioInversor[];
	sonAsesores : AsesorConultor[];
}