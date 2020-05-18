import { Entorno } from './Entorno';
import { Primitivo } from './Primitivo';

export abstract class AST {
    row: number;
    column: number;
    tipo: Primitivo.TYPE;

    constructor(fila: number, columna: number) {
        this.row = fila;
        this.column = columna;
        this.tipo = Primitivo.TYPE.NULL;
    }

    public abstract getOptimizacionMirilla(numero: number, entorno: Entorno): {optimizacion: number, result: string};

    public abstract getOptimizacionBloque(entorno: Entorno): string;

}