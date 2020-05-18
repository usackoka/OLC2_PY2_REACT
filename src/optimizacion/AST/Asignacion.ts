import { Nodo } from "./Nodo";
import { Entorno } from "./Entorno";

export class Asignacion extends Nodo {

    direccion: string;
    expresion: Nodo;

    constructor (direccion:string, expresion:Nodo, fila:number, columna:number) {
        super(fila, columna);
        this.direccion = direccion;
        this.expresion = expresion;
    }

    public getMirrilla(entorno:Entorno): string{
        let subOpt = this.expresion.getMirrilla(entorno)
        if(this.direccion === subOpt){
            return "";
        }

        return this.direccion+" = "+subOpt;
    };

    public getBloque(entorno:Entorno): string{
        return "";
    };
    
}