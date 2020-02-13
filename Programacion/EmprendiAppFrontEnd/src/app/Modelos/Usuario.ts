import { Perfil } from './Perfil';
import { Mensaje } from './Mensaje';
import { Llamada } from './Llamada';
import { Convocatoria } from './Convocatoria';
import { PersonaNaturalEmpresa } from './PersonaNaturalEmpresa';
export class Usuario{
    id:number;
    nombres:String;
    apellidos:String;
    telefono:String;
    email:String;
    direccionContacto:String;
    descripcionIntereses:String;
    redesSociales:String;
    perfil:Perfil;
    mensajesRealizados:Mensaje[];
    llamadRealizadas:Llamada[];
    convocatoriasInterez:Convocatoria[];
    esCLiente:PersonaNaturalEmpresa[];
} 