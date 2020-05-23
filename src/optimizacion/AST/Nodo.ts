import { Entorno } from "./Entorno";

export abstract class Nodo {
    fila: number;
    columna: number;
    optimizacionRealizada: number;

    constructor(fila: number, columna: number) {
        this.fila = fila;
        this.columna = columna;
        this.optimizacionRealizada = 0;
    }

    public abstract getMirrilla(entorno:Entorno): string;

    public abstract getBloque(entorno:Entorno): string;

    public abstract getBloqueGraf(entorno:Entorno): string;

}