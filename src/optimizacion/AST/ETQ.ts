import { Nodo } from "./Nodo";
import { Entorno } from "./Entorno";

export class ETQ extends Nodo {

    etiqueta:string;

    constructor (etiqueta:string, fila:number, columna:number) {
        super(fila, columna);
        this.etiqueta = etiqueta;
    }

    public getMirrilla(entorno:Entorno): string{
        return this.etiqueta+":";
    };

    public getBloque(entorno:Entorno): string{
        return this.etiqueta+":";
    };
    
}