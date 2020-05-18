import { AST } from './AST';
import { Entorno } from './Entorno';

export class Aritmetica extends AST {

    private operando1: AST;
    private operando2: AST;
    private operador: Aritmetica.TYPE;

    constructor(operando1: AST, operando2: AST, operador: Aritmetica.TYPE, fila: number, columna: number) {
        super(fila, columna);
        this.operando1 = operando1;
        this.operando2 = operando2;
        this.operador = operador;
    }

    public getOptimizacionMirilla(numero: number, entorno: Entorno): {optimizacion: number, result: string} {
        if(this.operando2 != null) {
            const op1 = this.operando1.getOptimizacionMirilla(numero, entorno).result;
            const op2 = this.operando2.getOptimizacionMirilla(numero, entorno).result;

            switch(this.operador) {
                case Aritmetica.TYPE.SUMA:
                    if(Number(op1) == 0) {
                        return {optimizacion: 12, result: op2};
                    } else if(Number(op2) == 0) {
                        return {optimizacion: 12, result: op1};
                    } else {
                        return {optimizacion: 0, result: this.aritmeticaToString(numero, entorno)};
                    }
                case Aritmetica.TYPE.RESTA:
                    if(Number(op2) == 0) {
                        return {optimizacion: 13, result: op1};
                    } else {
                        return {optimizacion: 0, result: this.aritmeticaToString(numero, entorno)};
                    }
                case Aritmetica.TYPE.MULTIPLICACION:
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
                        return {optimizacion: 0, result: this.aritmeticaToString(numero, entorno)};
                    }
                case Aritmetica.TYPE.DIVISION:
                    if(Number(op1) == 0) {
                        return {optimizacion: 18, result: op1};
                    } else if(Number(op2) == 1) {
                        return {optimizacion: 15, result: op1};
                    } else {
                        return {optimizacion: 0, result: this.aritmeticaToString(numero, entorno)};
                    }
                default:
                    return {optimizacion: 0, result: this.aritmeticaToString(numero, entorno)};
            }
        } else {
            return {optimizacion: 0, result: this.aritmeticaToString(numero, entorno)};
        }
    }

    public getOptimizacionBloque(entorno: Entorno): string {
        throw new Error("Method not implemented.");
    }

    private aritmeticaToString(numero: number, entorno: Entorno):string {
        if(this.operando2 != null) {
            return this.operando1.getOptimizacionMirilla(numero, entorno).result + ' ' + this.operadorToString() + ' ' + this.operando2.getOptimizacionMirilla(numero, entorno).result;
        } else {
            return this.operadorToString() + this.operando1.getOptimizacionMirilla(numero, entorno).result;
        }
    }

    private operadorToString():string {
        switch(this.operador) {
            case Aritmetica.TYPE.SUMA:
                return '+';
            case Aritmetica.TYPE.RESTA:
                return '-';
            case Aritmetica.TYPE.MULTIPLICACION:
                return '*';
            case Aritmetica.TYPE.DIVISION:
                return '/';
            case Aritmetica.TYPE.MODULO:
                return '%';
        }
    }
    
}

export namespace Aritmetica {

    export enum TYPE {
        SUMA,
        RESTA,
        MULTIPLICACION,
        DIVISION,
        MODULO
    }
    
}

