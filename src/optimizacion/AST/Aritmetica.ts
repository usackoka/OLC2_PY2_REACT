import { AST } from './AST';
import { Arbol3D } from './Arbol';

export namespace TiposAritmetica {

    export enum OperadorAritmetico {
        SUMA,
        RESTA,
        MULTIPLICACION,
        DIVISION,
        MODULO
    }
    
}

export class Aritmetica extends AST {

    private operando1: AST;
    private operando2: AST;
    private operador: TiposAritmetica.OperadorAritmetico;

    constructor(operando1: AST, operando2: AST, operador: TiposAritmetica.OperadorAritmetico, fila: number, columna: number) {
        super(fila, columna);
        this.operando1 = operando1;
        this.operando2 = operando2;
        this.operador = operador;
    }

    public getOptimizacionMirilla(numero: number, tree: Arbol3D): {optimizacion: number, result: string} {
        if(this.operando2 != null) {
            const op1 = this.operando1.getOptimizacionMirilla(numero, tree).result;
            const op2 = this.operando2.getOptimizacionMirilla(numero, tree).result;

            switch(this.operador) {
                case TiposAritmetica.OperadorAritmetico.SUMA:
                    if(Number(op1) == 0) {
                        return {optimizacion: 12, result: op2};
                    } else if(Number(op2) == 0) {
                        return {optimizacion: 12, result: op1};
                    } else {
                        return {optimizacion: 0, result: this.aritmeticaToString(numero, tree)};
                    }
                case TiposAritmetica.OperadorAritmetico.RESTA:
                    if(Number(op2) == 0) {
                        return {optimizacion: 13, result: op1};
                    } else {
                        return {optimizacion: 0, result: this.aritmeticaToString(numero, tree)};
                    }
                case TiposAritmetica.OperadorAritmetico.MULTIPLICACION:
                    if(Number(op1) == 0) {
                        return {optimizacion: 17, result: op1};
                    } else if(Number(op2) == 0) {
                        return {optimizacion: 17, result: op2};
                    } else if(Number(op1) == 1) {
                        return {optimizacion: 14, result: op2};
                    } else if(Number(op2) == 1) {
                        return {optimizacion: 14, result: op1};
                    } else if(Number(op1) == 2) {
                        return {optimizacion: 16, result: op2 + ' + ' + op2};
                    } else if(Number(op2) == 2) {
                        return {optimizacion: 16, result: op1 + ' + ' + op1};
                    } else {
                        return {optimizacion: 0, result: this.aritmeticaToString(numero, tree)};
                    }
                case TiposAritmetica.OperadorAritmetico.DIVISION:
                    if(Number(op1) == 0) {
                        return {optimizacion: 18, result: op1};
                    } else if(Number(op2) == 1) {
                        return {optimizacion: 15, result: op1};
                    } else {
                        return {optimizacion: 0, result: this.aritmeticaToString(numero, tree)};
                    }
                default:
                    return {optimizacion: 0, result: this.aritmeticaToString(numero, tree)};
            }
        } else {
            return {optimizacion: 0, result: this.aritmeticaToString(numero, tree)};
        }
    }

    public getOptimizacionBloque(tree: Arbol3D): string {
        throw new Error("Method not implemented.");
    }

    private aritmeticaToString(numero: number, tree: Arbol3D):string {
        if(this.operando2 != null) {
            return this.operando1.getOptimizacionMirilla(numero, tree).result + ' ' + this.operadorToString() + ' ' + this.operando2.getOptimizacionMirilla(numero, tree).result;
        } else {
            return this.operadorToString() + this.operando1.getOptimizacionMirilla(numero, tree).result;
        }
    }

    private operadorToString():string {
        switch(this.operador) {
            case TiposAritmetica.OperadorAritmetico.SUMA:
                return '+';
            case TiposAritmetica.OperadorAritmetico.RESTA:
                return '-';
            case TiposAritmetica.OperadorAritmetico.MULTIPLICACION:
                return '*';
            case TiposAritmetica.OperadorAritmetico.DIVISION:
                return '/';
            case TiposAritmetica.OperadorAritmetico.MODULO:
                return '%';
        }
    }
    
}

