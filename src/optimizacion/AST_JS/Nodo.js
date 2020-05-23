"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista_temporales_Usados = [];
var Nodo = /** @class */ (function () {
    function Nodo(fila, columna) {
        this.fila = fila;
        this.columna = columna;
        this.optimizacionRealizada = 0;
    }
    Nodo.popTemporal = function (arg0) {
        exports.lista_temporales_Usados = exports.lista_temporales_Usados.filter(function (value, index, arr) { return value != arg0; });
    };
    return Nodo;
}());
exports.Nodo = Nodo;
