import { Usuario } from './Usuario'
import { PersonaNaturalEmpresa } from './PersonaNaturalEmpresa'
//necesaria revision
export class SocioInversor {
    id:number;
    areasExperticia:String;
    conociminetoQAporta:String;
    cantidadHorasDispuestoTrabajar:String;
    areasInteres:String;
    tipoSocioInversor:boolean;
    //EmpresaTrabajo:PersonaNaturalEmpresa[];
    usuario:Usuario;
}