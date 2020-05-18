import { AST } from './AST';

export class Entorno {
    instrucciones: Array<AST>;
    optimizacionMirilla: string;
    optimizacionBloque: string;
    listaOptimizaciones: [{no: number, regla: number, descripcion: string, fila: number, columna: number}];

    constructor() {
        this.instrucciones = [];
        this.optimizacionMirilla = '';
        this.optimizacionBloque = '';
        this.listaOptimizaciones = [{no: 0, regla: 0, descripcion: '', fila: 0, columna: 0}];
        this.listaOptimizaciones.pop();
    }

    getOptimizacionMirilla(numero: number):string {
        this.instrucciones.forEach( inst => {
            inst.getOptimizacionMirilla(numero, this);
        });
        console.log(this.listaOptimizaciones);
        return this.optimizacionMirilla;
    }

    getOptimizacionBloque():string {
        return this.optimizacionBloque;
    }

    addIfTranslate(operando1: Object, operador: string, operando2: Object, etiqueta: string) {
        this.optimizacionMirilla += 'if(' + operando1.toString() + ' ' + operador + ' ' + operando2 + ') goto ' + etiqueta + ';\n';
    }

    addPrintTranslate(tipo: string, valor: Object) {
        this.optimizacionMirilla += 'print ("%' + tipo +'",' + valor.toString() + ');\n';
    }

    addGoToTranslate(etiqueta: string) {
        this.optimizacionMirilla += 'goto ' + etiqueta + ';\n';
    }

    addEtiquetaTranslate(etiqueta: string) {
        this.optimizacionMirilla += etiqueta + ':\n';
    }

    add1AsignacionTranslate(asignado: string, operando1: Object) {
        this.optimizacionMirilla += asignado + ' = ' + operando1.toString() + ';\n';
    }

    add2AsignacionTranslate(asignado: string, operando1: Object, operador: string, operando2: string) {
        this.optimizacionMirilla += asignado + ' = ' + operando1.toString() + ' ' + operador + ' ' + operando2.toString() + ';\n';
    }

}