import { Entorno } from "./Entorno";

export interface InterfazAcceso{
    getPosicion(entorno:Entorno):string;
    isInHeap(entorno:Entorno):boolean;
}