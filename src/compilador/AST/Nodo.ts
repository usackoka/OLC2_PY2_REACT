import { Entorno } from "./Entorno";

export abstract class Nodo {
    fila:number;
    columna:number;
    etqRetorno:String;
    etqSalidaIf:string;
    etqContinue:string;
    etqBreak:string;
    nombreFuncion:string;

    constructor(){
        this.fila = 0;
        this.columna = 0;
    }

    public abstract getTraduccion(entorno:Entorno): string;
}