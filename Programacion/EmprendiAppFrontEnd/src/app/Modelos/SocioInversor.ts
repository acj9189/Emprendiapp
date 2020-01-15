import { Usuario } from './Usuario'
import { PersonaNaturalEmpresa } from './PersonaNaturalEmpresa'
//necesaria revision
export class SocioInversor extends Usuario{
    TipoSocioInversor:boolean;
    AreaExperticai:String;
    ConocimientoAporta:String;
    CantidadHorasDispuetoATrabajar:String;
    AreasInteres:String;
    EmpresaTrabajo:PersonaNaturalEmpresa[];
}