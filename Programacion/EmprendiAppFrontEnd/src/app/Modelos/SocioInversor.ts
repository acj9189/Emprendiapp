import { Usuario } from './Usuario'
import { PersonaNaturalEmpresa } from './PersonaNaturalEmpresa'
//necesaria revision
export class SocioInversor {
    id:number;
    areasExperticia:String;
    conociminetoQAporta:String;
    tipoSocioInversor:boolean;
    cantidadHorasDispuestoTrabajar:String;
    areasInteres:String;
    //EmpresaTrabajo:PersonaNaturalEmpresa[];
    usuario:Usuario;
}