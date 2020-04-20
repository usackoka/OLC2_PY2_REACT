import {AST} from './AST';

export abstract class Nodo4D{
    fila:Number;
    columna:Number;

    constructor(){
        this.fila = 0;
        this.columna = 0;
    }

    public abstract getTraduccion(arbol:AST): string;

    public abstract getValor(arbol:AST): number;
}

