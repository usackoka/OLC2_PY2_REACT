import { Nodo } from "./Nodo";
import { Entorno } from "./Entorno";

export class Goto extends Nodo {

    etiqueta:string;

    constructor (etiqueta:string, fila:number, columna:number) {
        super(fila, columna);
        this.etiqueta = etiqueta;
    }

    public getMirrilla(entorno:Entorno): string{
        entorno.setUltimaEtqRegla2(this.etiqueta.toLowerCase());
        return "goto "+this.etiqueta+";";
    };

    public getBloque(entorno:Entorno): string{
        return "goto "+this.etiqueta+";";
    };
    public getBloqueGraf(entorno: Entorno): string {
        return "goto "+this.etiqueta+";";
    }

    public getNormal(entorno: Entorno): string {
        return "goto "+this.etiqueta+";";
    }
    
    
}