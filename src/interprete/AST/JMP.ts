import {Nodo4D} from './Nodo4D';
import {AST} from './AST';

export class JMP extends Nodo4D{
    
    idETQ:string;
    constructor(idETQ:string, fila:number, columna:number) {
        super();
        this.idETQ = idETQ;
        this.fila = fila;
        this.columna = columna;
    }
    
    getValor(arbol:AST): number {
        arbol.ejecutarETQ(this.idETQ);
        return -1;
    }

    getTraduccion(arbol:AST): string {
        arbol.addTraduccion("JMP "+this.idETQ);
        return "";
    }

}