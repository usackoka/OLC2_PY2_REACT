import { Nodo } from "./Nodo";
import { Entorno } from "./Entorno";
import { Relacional } from "./Relacional";

export class If extends Nodo {
    getGotoOnly() {
        return "goto "+this.etiqueta+";";
    }

    condicion: Relacional;
    etiqueta:string;

    constructor (condicion: Relacional, etiqueta:string, fila:number, columna:number) {
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

    public getBloqueGraf(entorno: Entorno): string {
        return "if ("+this.condicion.getBloqueGraf(entorno)+" ) goto "+this.etiqueta+";";
    }

    public getNormal(entorno: Entorno): string {
        return "if ("+this.condicion.getNormal(entorno)+" ) goto "+this.etiqueta+";";
    }
    
}