import { Nodo } from "./Nodo";
import { Entorno } from "./Entorno";

export class If extends Nodo {

    condicion: Nodo;
    etiqueta:string;

    constructor (condicion: Nodo, etiqueta:string, fila:number, columna:number) {
        super(fila, columna);
        this.condicion = condicion;
        this.etiqueta = etiqueta;
    }

    public getMirrilla(entorno:Entorno): string{
        return "if ("+this.condicion.getMirrilla(entorno)+" ) goto "+this.etiqueta+";";
    };

    public getBloque(entorno:Entorno): string{
        return "if ("+this.condicion.getMirrilla(entorno)+" ) goto "+this.etiqueta+";";
    };
    
}