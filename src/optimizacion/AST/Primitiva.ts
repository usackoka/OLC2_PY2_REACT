import { AST } from './AST';
import { Arbol3D } from './Arbol';
import { Tipo } from './Tipo';

export class Primitiva extends AST {

    valor: Object;

    constructor (tipo: Tipo.Tipos, valor: Object, fila: number, columna: number) {
        super(fila, columna);
        this.tipo = tipo;
        this.valor = valor;
    }

    public getOptimizacionMirilla(numero: number, tree: Arbol3D): {optimizacion: number, result: string} {
        return {optimizacion: 0, result: this.valor + ''};
    }

    public getOptimizacionBloque(tree: Arbol3D): string {
        throw new Error("Method not implemented.");
    }
    
}