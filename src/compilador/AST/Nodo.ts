import { Entorno } from "./Entorno";

export abstract class Nodo {
    fila:number;
    columna:number;

    constructor(){
        this.fila = 0;
        this.columna = 0;
    }

    public abstract getTraduccion(entorno:Entorno): string;
}