import { Usuario } from './Usuario'
import { Empresa } from './Empresa'

export class AsesorConultor extends Usuario{
    areaExperticia:String;
    CostotHora:String;
    areasInteres:String;
    tipoConsultorAsesro:String;
    EmpresasTrbajo:Empresa[];
}
