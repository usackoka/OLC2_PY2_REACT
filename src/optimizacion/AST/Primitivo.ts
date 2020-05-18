import { AST } from './AST';
import { Entorno } from './Entorno';

export class Primitivo extends AST {

    valor: Object;

    constructor (tipo: Primitivo.TYPE, valor: Object, fila: number, columna: number) {
        super(fila, columna);
        this.tipo = tipo;
        this.valor = valor;
    }

    public getOptimizacionMirilla(numero: number, entorno: Entorno): {optimizacion: number, result: string} {
        return {optimizacion: 0, result: this.valor + ''};
    }

    public getOptimizacionBloque(entorno: Entorno): string {
        throw new Error("Method not implemented.");
    }
    
}

export namespace Primitivo {

    export enum TYPE {
        INTEGER,
        DOUBLE,
        STRING,
        IDENTIFICADOR,
        NULL,
        STACK,
        HEAP
    }
    
}