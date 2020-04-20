import { Nodo4D } from "./Nodo4D";
import {AST} from './AST';

export class Call4D extends Nodo4D{
    
    idCall:string;
    constructor(idCall:string, fila:number, columna:number) {
        super();
        this.idCall = idCall;
        this.fila = fila;
        this.columna = columna;
    } 
    
    getValor(arbol:AST):number { 
        arbol.ejecutarCall(this.idCall);
        return null;
    }

    getTraduccion(arbol:AST):string {
        arbol.addTraduccion("call "+this.idCall);
        return "";
    }
}