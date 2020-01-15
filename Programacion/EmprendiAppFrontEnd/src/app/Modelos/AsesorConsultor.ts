import { Usuario } from './Usuario'
import { PersonaNaturalEmpresa } from './PersonaNaturalEmpresa'

export class AsesorConultor extends Usuario{
    areaExperticia:String;
    CostotHora:String;
    areasInteres:String;
    tipoConsultorAsesro:String;
    EmpresasTrbajo:PersonaNaturalEmpresa[];
}
