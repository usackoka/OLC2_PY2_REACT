import { Entorno } from "./Entorno";

export abstract class Nodo {
    fila:number;
    columna:number;
    etqRetorno:string;
    etqSalidaIf:string;
    etqContinue:string;
    etqBreak:string;
    nombreFuncion:string;

    constructor(){
        this.fila = 0;
        this.columna = 0;
    }

    public copiarEtiquetas(nodo:Nodo){
        this.etqRetorno = nodo.etqRetorno;
        this.etqContinue =nodo.etqContinue;
        this.nombreFuncion = nodo.nombreFuncion;
        this.etqBreak = nodo.etqBreak;
    }

    public abstract getTraduccion(entorno:Entorno): string;
}