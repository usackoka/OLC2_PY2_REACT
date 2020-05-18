"use strict";
exports.__esModule = true;
var Arbol3D = /** @class */ (function () {
    function Arbol3D() {
        this.instrucciones = [];
        this.optimizacionMirilla = '';
        this.optimizacionBloque = '';
        this.listaOptimizaciones = [{ no: 0, regla: 0, descripcion: '', fila: 0, columna: 0 }];
        this.listaOptimizaciones.pop();
    }
    Arbol3D.prototype.getOptimizacionMirilla = function (numero) {
        var _this = this;
        this.instrucciones.forEach(function (inst) {
            inst.getOptimizacionMirilla(numero, _this);
        });
        console.log(this.listaOptimizaciones);
        return this.optimizacionMirilla;
    };
    Arbol3D.prototype.getOptimizacionBloque = function () {
        /*this.optimizacionMirilla += 'var Stack[];\n';
        this.optimizacionMirilla += 'var Heap[];\n';
        this.optimizacionMirilla += 'var P = 0;\n';
        this.optimizacionMirilla += 'var H = 0;\n';
        
        this.instrucciones.forEach( inst => {
            if(!(inst instanceof Funcion)) {
                inst.getTranslate(this.tabla, this);
            }
        });

        this.optimizacionMirilla += 'call Principal;\n';

        const etiqueta = '';
        this.optimizacionMirilla += 'goto ' + etiqueta + ';\n';

        this.instrucciones.forEach( inst => {
            if(inst instanceof Funcion) {
                inst.getTranslate(this.tabla, this);
            }
        });

        this.optimizacionMirilla += etiqueta + ':';*/
        return this.optimizacionBloque;
    };
    Arbol3D.prototype.addIfTranslate = function (operando1, operador, operando2, etiqueta) {
        this.optimizacionMirilla += 'if(' + operando1.toString() + ' ' + operador + ' ' + operando2 + ') goto ' + etiqueta + ';\n';
    };
    Arbol3D.prototype.addPrintTranslate = function (tipo, valor) {
        this.optimizacionMirilla += 'print ("%' + tipo + '",' + valor.toString() + ');\n';
    };
    Arbol3D.prototype.addGoToTranslate = function (etiqueta) {
        this.optimizacionMirilla += 'goto ' + etiqueta + ';\n';
    };
    Arbol3D.prototype.addEtiquetaTranslate = function (etiqueta) {
        this.optimizacionMirilla += etiqueta + ':\n';
    };
    Arbol3D.prototype.add1AsignacionTranslate = function (asignado, operando1) {
        this.optimizacionMirilla += asignado + ' = ' + operando1.toString() + ';\n';
    };
    Arbol3D.prototype.add2AsignacionTranslate = function (asignado, operando1, operador, operando2) {
        this.optimizacionMirilla += asignado + ' = ' + operando1.toString() + ' ' + operador + ' ' + operando2.toString() + ';\n';
    };
    return Arbol3D;
}());
exports.Arbol3D = Arbol3D;
