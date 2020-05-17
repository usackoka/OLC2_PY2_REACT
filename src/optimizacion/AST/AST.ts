import { Arbol3D } from './Arbol';
import { Tipo } from './Tipo';

export abstract class AST {
    row: number;
    column: number;
    tipo: Tipo.Tipos;

    constructor(fila: number, columna: number) {
        this.row = fila;
        this.column = columna;
        this.tipo = Tipo.Tipos.NULL;
    }

    public abstract getOptimizacionMirilla(numero: number, tree: Arbol3D): {optimizacion: number, result: string};

    public abstract getOptimizacionBloque(tree: Arbol3D): string;

}