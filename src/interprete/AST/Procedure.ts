import {Nodo4D} from './Nodo4D';
import {AST} from './AST';

export class Procedure extends Nodo4D{
    
    instrucciones:Array<Nodo4D>;
    idProc:string;

    constructor(idProc:string,instrucciones:Array<Nodo4D>, fila:number, columna:number) {
        super();
        this.idProc = idProc;
        this.instrucciones = instrucciones;
        this.columna = columna;
        this.fila = fila;
    }
    
    getValor(arbol:AST): number {
        return -1;
    }

    getTraduccion(arbol:AST): string {
        return "";
    }

}