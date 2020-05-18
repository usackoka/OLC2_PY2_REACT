import { Nodo } from "./Nodo";
import { Entorno } from "./Entorno";

export class Goto extends Nodo {

    etiqueta:string;

    constructor (etiqueta:string, fila:number, columna:number) {
        super(fila, columna);
        this.etiqueta = etiqueta;
    }

    public getMirrilla(entorno:Entorno): string{
        return "goto "+this.etiqueta+";";
    };

    public getBloque(entorno:Entorno): string{
        return "goto "+this.etiqueta+";";
    };
    
}