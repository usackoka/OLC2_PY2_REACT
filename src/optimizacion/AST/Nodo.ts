import { Entorno } from "./Entorno";
export let lista_temporales_Usados:Array<string> = []; 
export abstract class Nodo {
    fila: number;
    columna: number;
    optimizacionRealizada: number;

    constructor(fila: number, columna: number) {
        this.fila = fila;
        this.columna = columna;
        this.optimizacionRealizada = 0;
    }
    static popTemporal(arg0: string) {
        lista_temporales_Usados= lista_temporales_Usados.filter(function(value, index, arr){ return value != arg0;});
    }

    public abstract getMirrilla(entorno:Entorno): string;

    public abstract getBloque(entorno:Entorno): string;

    public abstract getBloqueGraf(entorno:Entorno): string;

    public abstract getNormal(entorno:Entorno): string;

}