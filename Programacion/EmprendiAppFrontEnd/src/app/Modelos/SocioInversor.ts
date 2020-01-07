import { Usuario } from './Usuario'
import { Empresa } from './Empresa'
export class SocioInversor extends Usuario{
    TipoSocioInversor:boolean;
    AreaExperticai:String;
    ConocimientoAporta:String;
    CantidadHorasDispuetoATrabajar:String;
    AreasInteres:String;
    EmpresaTrabajo:Empresa[];
}