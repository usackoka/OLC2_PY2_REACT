import { Entorno } from "./Entorno";

export abstract class Nodo {
    fila: number;
    columna: number;

    constructor(fila: number, columna: number) {
        this.fila = fila;
        this.columna = columna;
    }

    public abstract getMirrilla(entorno:Entorno): string;

    public abstract getBloque(entorno:Entorno): string;

}