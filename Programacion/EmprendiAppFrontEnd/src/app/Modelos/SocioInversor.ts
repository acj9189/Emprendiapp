import { Usuario } from './Usuario'
import { PersonaNaturalEmpresa } from './PersonaNaturalEmpresa'
//necesaria revision
export class SocioInversor {
    id:number;
    TipoSocioInversor:boolean;
    AreaExperticai:String;
    ConocimientoAporta:String;
    CantidadHorasDispuetoATrabajar:String;
    AreasInteres:String;
    //EmpresaTrabajo:PersonaNaturalEmpresa[];
    usuario:Usuario;
}