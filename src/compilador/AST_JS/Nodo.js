"use strict";
exports.__esModule = true;
var Nodo = /** @class */ (function () {
    function Nodo() {
        this.fila = 0;
        this.columna = 0;
    }
    Nodo.prototype.copiarEtiquetas = function (nodo) {
        this.etqRetorno = nodo.etqRetorno;
        this.etqContinue = nodo.etqContinue;
        this.nombreFuncion = nodo.nombreFuncion;
        this.etqBreak = nodo.etqBreak;
    };
    return Nodo;
}());
exports.Nodo = Nodo;
