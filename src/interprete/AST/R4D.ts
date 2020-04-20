import {Nodo4D} from './Nodo4D';
import {AST} from './AST';

export class R4D extends Nodo4D{
    
    idProc:string;
    constructor(idProc:string, fila:number, columna:number) {
        super();
        this.idProc = idProc;
        this.columna = columna;
        this.fila = fila;
    }
    
    getValor(arbol:AST): number {
        arbol.ejecutarRet();
        return -1;
    }

    getTraduccion(arbol:AST): string {
        arbol.addTraduccion("ret");
        arbol.addTraduccion(this.idProc+" endp");
        arbol.addTraduccion("FIN_PROC_"+this.idProc+":");
        return "";
    }

}