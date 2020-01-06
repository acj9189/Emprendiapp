import { Usuario } from './Usuario';
import { SocioInversor } from './SocioInversor';

export class Empresa extends Usuario{
    idEmpresa:number;
    nombre:String;
    direccion:String;
    telefonoContacto:String;
    redesSociales:String;
    videoPitch:String;    
    sociosInversores:SocioInversor[];
    Empresas:Empresa[];
}